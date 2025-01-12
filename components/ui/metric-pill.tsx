import { Card, CardContent } from '@/components/ui/card';

interface MetricPillProps {
  title: string;
  value: string;
  description?: string;
}

export function MetricPill({ title, value, description }: MetricPillProps) {
  return (
    <Card className="flex-1">
      <CardContent>
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className="mt-2 text-2xl font-bold">{value}</p>
        {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
      </CardContent>
    </Card>
  );
}
