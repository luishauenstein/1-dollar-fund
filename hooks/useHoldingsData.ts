'use client';

import { useQuery } from '@tanstack/react-query';

interface HoldingData {
  date: string;
  btcAmount: number;
  usdAmount: number;
  totalInvested: number;
  costBase: number;
}

async function fetchHoldings(): Promise<{ data: HoldingData[] }> {
  const response = await fetch('/api/holdings');
  if (!response.ok) {
    throw new Error('Failed to fetch holdings data');
  }
  return response.json();
}

export function useHoldingsData() {
  return useQuery({
    queryKey: ['holdings'],
    queryFn: fetchHoldings,
  });
}
