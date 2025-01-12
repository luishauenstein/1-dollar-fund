import Link from 'next/link';

export function Hero() {
  return (
    <div className="text-center space-y-4 py-12">
      <h1 className="text-xl md:text-4xl font-bold tracking-tight">
        One Dollar of Bitcoin is enough.
      </h1>
      <p className="text-sm md:text-xl text-muted-foreground max-w-2xl mx-auto">
        The 1 Dollar Fund has a simple strategy:
        <br />
        Buy $1 of Bitcoin every hour. Forever.
      </p>
      <div className="mt-8">
        <Link
          href="/faq"
          className="inline-flex items-center rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/80 transition-colors"
        >
          Why and how?
        </Link>
      </div>
    </div>
  );
}
