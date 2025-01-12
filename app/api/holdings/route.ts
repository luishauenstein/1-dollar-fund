import { NextResponse } from 'next/server';

// Add interfaces for type safety
interface GoogleSheetsCell {
  v: string | number;
}

interface GoogleSheetsRow {
  c: (GoogleSheetsCell | null)[];
}

interface GoogleSheetsResponse {
  table: {
    rows: GoogleSheetsRow[];
  };
}

interface HoldingData {
  date: string;
  btcAmount: number;
  usdAmount: number;
  totalInvested: number;
  costBase: number;
}

const SHEET_ID = '1n2Exw1FUgsObaz8unkr6FdJLNqSxwNY1M5wqzuBTKC8';
const SHEET_NAME = 'btc-buys';
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`;

function parseGoogleSheetsDate(dateStr: string): string {
  const matches = dateStr.match(/\d+/g);
  if (!matches || matches.length < 6) {
    throw new Error('Invalid date format');
  }

  const [year, month, day, hour, minute] = matches.map(Number);
  return new Date(year, month, day, hour, minute).toISOString();
}

export async function GET() {
  try {
    const response = await fetch(SHEET_URL, {
      next: { revalidate: 300 }, // Cache for 5 minutes (300 seconds)
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data from Google Sheets');
    }

    const text = await response.text();
    // Remove the Google Sheets response prefix and suffix
    const jsonString = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
    const json = JSON.parse(jsonString) as GoogleSheetsResponse;

    if (!json.table?.rows) {
      throw new Error('Invalid data format from Google Sheets');
    }

    // Get the cost base from cell I2 (second row, 9th column, index 8)
    const costBase = json.table.rows[1]?.c[8]?.v ?? 0;

    const data: HoldingData[] = json.table.rows.map((row: GoogleSheetsRow) => {
      const cells = row.c;
      if (!cells?.[0]?.v || !cells?.[2]?.v || !cells?.[4]?.v || !cells?.[5]?.v) {
        throw new Error('Missing required data in row');
      }

      return {
        date: parseGoogleSheetsDate(cells[0].v.toString()),
        btcAmount: Number(cells[4].v), // Fund Value (BTC)
        usdAmount: Number(cells[5].v), // Fund Value (USD)
        totalInvested: Number(cells[2].v), // Cumulative Invested Amount
        costBase: Number(costBase), // Average cost base from I2
      };
    });

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error fetching holdings data:', error);
    return NextResponse.json({ error: 'Failed to fetch holdings data' }, { status: 500 });
  }
}
