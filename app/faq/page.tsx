import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="container mx-auto p-4 max-w-3xl">
      <Link
        href="/"
        className="inline-block mb-6 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        ← Back to Home
      </Link>

      <div className="prose dark:prose-invert">
        <h1>The 1 Dollar Fund Explained</h1>

        <h2>The Strategy</h2>
        <p>
          The 1 Dollar Fund is an experiment set to run for decades, aimed at proving that $1 per
          hour is enough to retire on Bitcoin. Starting on 1st of January 2025, $1 of Bitcoin is
          purchased every hour by the fund. This website tracks these purchases. It is still early
          and accessible to copy this strategy. The barrier of entry is only expected to increase
          over time.
        </p>

        <h2>Why are you doing this?</h2>
        <ol>
          <li>To encourage people to do something for the long term.</li>
          <li>Because I want to prove that the strategy works and help others.</li>
          <li>Because it's fun to stack up a new stash from scratch in public.</li>
        </ol>

        <h2>Can I really retire from $1 per hour?</h2>
        <p>
          Short answer - yes. Long answer: I could share some calculations here that assume a 30%
          CAGR over the next 20 years. That would bring us into the ballpark of 5 million USD fund
          value. It misses the point though, since the 1 Dollar Fund is an ultra long term endeavor.
          It will never be sold for fiat. Sharing its $ value is a temporary thing, because these
          paper gains give us a good feeling while Bitcoin is still in its appreciation phase. In
          the long run, following this strategy diligently should allow you to accumulate a good
          amount of Bitcoin that puts you in the wealthiest 1% of individuals once the world is on a
          Bitcoin standard. See it as an endowment to secure freedom and prosperity for yourself and
          future generations. Plant a seed now. The future will thank you for it.
        </p>

        <h2>But $1 per hour is over $700 per month!</h2>
        <p>
          The 1 Dollar Fund contributions are at a level where they might be a stretch to reach for
          many people - but not impossible. If you can't commit to $1 per hour, start with less and
          see $1 as a target amount, around which you can anchor your mind and actions. Ask
          yourself: "What can I do that is valuable to others that allows me to earn $1 per hour of
          my lifetime to commit to my fund?"
        </p>
        <p>
          Most jobs earn you much more than $1 per hour, so if there's not enough money left, ask
          yourself "Where does my income go?" Taxes? Something else? Time to optimize. The $1 per
          hour target can help you guide your actions and make decisions for the long term.
          Eventually, you'll be easily able to commit this amount and even much more.
        </p>

        <h2>Why not invest in XYZcoin instead?</h2>
        <p>
          When you buy altcoins, you bet on the team behind the project executing well (akin to a
          startup investment). Altcoin investing thus requires careful periodic review of your
          investments. This is not in line with the 1 Dollar Fund's passive, ultra long term
          strategy.
        </p>
        <p>
          Bitcoin has shown to outperform 99% of altcoins over time. It is on its way to becoming
          the world's next reserve asset and riding its multi-decade appreciation phase is a once in
          a lifetime opportunity. This is the foundation of the 1 Dollar Fund strategy.
        </p>

        <h2>Why not invest in an ETF instead?</h2>
        <p>
          ETFs are structured investment products that might be closed or change their dynamics
          (fees, etc.) over time. For a strategy that relies on being untouched for decades, it's
          better to hold a bearer asset directly, rather than a structured investment product
          offered by a third party. The 1 Dollar Fund strategy relies on riding Bitcoin's adoption
          s-curve to global reserve asset. If you are already investing in diversified equity ETFs
          like the S&P 500 or the MSCI World, it might make sense to also set up your own 1 Dollar
          Fund as a hedge, in case Bitcoin adoption causes a global equity repricing (= stocks go
          down since they are now denominated against hard BTC rather than soft fiat currencies).
        </p>

        <h2>Why exactly start in 2025?</h2>
        <p>
          2025 and beyond are looking like an inflection point for Bitcoin's adoption as a reserve
          asset. The technology at this point has over 15 years on its back, enough to mature and
          prove its reliability. Adoption always follows an s-curve, and it looks like the Bitcoin
          adoption curve is entering its steepest phase in 2025 and beyond.
        </p>

        <h2>What are the risks of this strategy?</h2>
        <ol className="list-decimal ml-6 space-y-4">
          <li>
            The biggest risk of failure comes from you not being able to commit to something truly
            for the long term and keep your actions in line with a strategy made to be executed for
            decades. In investing, not doing anything is often the hardest, especially when the
            price dips or some other unexpected event happens. The 1 Dollar Fund is designed to make
            it easy to not lose track.
          </li>
          <li>
            The second risk is the US dollar rapidly losing value against Bitcoin before you had
            enough time to accumulate BTC into your One Dollar Fund. Adoption going too fast,
            basically. I don't see this risk as too high, as currently less than 1% of the world's
            population truly understands the implications of Bitcoin. I expect the appreciation
            toward reserve currency status to take multiple years or even decades. If in the
            meantime your fiat currency implodes, you can just increase contributions or denominate
            your target contribution in another currency.
          </li>
          <li>
            The third risk is Bitcoin failing to ascend towards reserve currency status. I
            personally see this risk as low and have extremely high conviction in Bitcoin, but the
            entire idea of the fund is built on this premise, so if you don't believe in it, this
            strategy is not for you.
          </li>
        </ol>

        <h2>Do you actually buy BTC every hour?</h2>
        <p>
          No. There are some platforms that offer hourly DCA, but what I do is maintain a
          spreadsheet with the hourly Bitcoin price and add up the purchase amounts to always know
          the minimum BTC needed to still follow the strategy. That's operationally a lot simpler,
          costs less in trading fees, and doesn't bind me to the very few platforms that actually
          offer hourly DCA.
        </p>

        <h2>How can I set up my own 1 Dollar Fund?</h2>
        <ol>
          <li>Set up a recurring buy! $24 per day, $168 per week or $720 per month.</li>
          <li>
            Stretch goal is to catch up with <b>this</b> fund that started on 1st of January 2025.{' '}
            <br />
            You see the current amount of BTC in the fund on the homepage and can make regular
            manual buys to keeep up.
          </li>
          <li>
            Bonus points for setting up another fund for your children or a cause that matters to
            you. Few people are thinking this long term. The future will thank you for it.
          </li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-8">
          <h3 className="text-lg font-semibold mt-0">Disclaimer</h3>
          <p className="text-sm text-muted-foreground mb-0">
            This is a public experiment and not financial advice. Whether you set up your own 1
            Dollar Fund is entirely up to you. Bitcoin is a volatile asset and this strategy might
            not be suitable for everyone. Do your own research.
          </p>
        </div>
      </div>
    </main>
  );
}
