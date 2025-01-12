'use client';

import { useHoldingsData } from '@/hooks/useHoldingsData';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Skeleton } from './ui/skeleton';

export function HoldingsChart() {
  // Get colors from CSS variables with fallbacks
  const bitcoinColor = 'var(--chart-bitcoin-color, #FF9900)';
  const usdColor = 'var(--chart-usd-color, #82ca9d)';

  const { data, isLoading, error } = useHoldingsData();

  if (isLoading) {
    return <Skeleton className="w-full h-[400px]" />;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="w-full h-[300px] sm:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data?.data}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={(date) => new Date(date).toLocaleDateString()}
            angle={-45}
            textAnchor="end"
            height={60}
          />
          <YAxis
            yAxisId="left"
            orientation="left"
            stroke={bitcoinColor}
            tickFormatter={(value) => value.toFixed(4)} // Format BTC with 8 decimals
            domain={[0, 'dataMax']}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke={usdColor}
            tickFormatter={(value) => `$${value.toFixed(2)}`} // Format USD with $ and 2 decimals
            domain={[0, 'dataMax']}
          />
          <Tooltip
            formatter={(value: number, name: string) => {
              if (name === 'BTC Holdings') return value.toFixed(8);
              return `$${value.toFixed(2)}`;
            }}
            labelFormatter={(label) => new Date(label).toLocaleString()}
            contentStyle={{ borderRadius: '8px' }}
          />
          <Area
            yAxisId="left"
            type="monotone"
            dataKey="btcAmount"
            stroke={bitcoinColor}
            fill={bitcoinColor}
            name="BTC Holdings"
            fillOpacity={0.3}
          />
          <Area
            yAxisId="right"
            type="monotone"
            dataKey="usdAmount"
            stroke={usdColor}
            fill={usdColor}
            name="USD Holdings"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
