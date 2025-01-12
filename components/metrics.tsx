'use client';

import { useHoldingsData } from '@/hooks/useHoldingsData';
import { MetricPill } from '@/components/ui/metric-pill';
import { Skeleton } from './ui/skeleton';

function calculateCAGR(endValue: number, startValue: number, startDate: Date): number {
  const endDate = new Date();
  const yearDiff = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);

  if (yearDiff <= 0 || startValue <= 0) return 0;

  return (Math.pow(endValue / startValue, 1 / yearDiff) - 1) * 100;
}

export function Metrics() {
  const { data, isLoading, error } = useHoldingsData();

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-[100px]" />
        ))}
      </div>
    );
  }

  if (error) {
    return <div>Error loading metrics</div>;
  }

  // Get the latest data point
  const latest = data?.data[data.data.length - 1];

  // Calculate metrics
  const currentBtc = latest?.btcAmount ?? 0;
  const currentUsd = latest?.usdAmount ?? 0;
  const totalInvested = latest?.totalInvested ?? 0;
  const costBase = latest?.costBase ?? 0;
  const totalReturn = ((currentUsd - totalInvested) / totalInvested) * 100;

  // Calculate CAGR
  const startDate = new Date('2025-01-01T00:00:00Z');
  const cagr = calculateCAGR(currentUsd, totalInvested, startDate);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      <MetricPill
        title="Holdings (BTC)"
        value={`${currentBtc.toFixed(4)} BTC`}
        description="Current Bitcoin holdings"
      />
      <MetricPill
        title="Holdings (USD)"
        value={`$${currentUsd.toLocaleString(undefined, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}`}
        description="Current value in USD"
      />
      <MetricPill
        title="Total $ Invested"
        value={`$${totalInvested.toLocaleString(undefined, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}`}
        description="Total capital invested"
      />
      <MetricPill
        title="Cost Base ($ per BTC)"
        value={`$${costBase.toLocaleString(undefined, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}`}
        description="Average purchase price"
      />
      <MetricPill
        title="Total Return (%)"
        value={`${totalReturn.toFixed(2)}%`}
        description="Total return since inception"
      />
      <MetricPill
        title={`CAGR since ${startDate.toLocaleDateString()}`}
        value={`${cagr.toFixed(2)}%`}
        description="Annualized rate of return"
      />
    </div>
  );
}
