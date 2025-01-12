import { Hero } from '@/components/ui/hero';
import { HoldingsChart } from '@/components/holdings-chart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Metrics } from '@/components/metrics';
import { Footer } from '@/components/ui/footer';

export default function Home() {
  return (
    <main className="container mx-auto p-4 space-y-4">
      <Hero />

      <Card className="w-full">
        <CardHeader>
          <CardTitle>1 Dollar Fund Holdings</CardTitle>
          <CardDescription>Track holdings in BTC and USD over time</CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <HoldingsChart />
        </CardContent>
      </Card>

      <Metrics />

      <Footer />
    </main>
  );
}
