export function Footer() {
  return (
    <footer className="text-center text-sm text-gray-500">
      Made by{' '}
      <a href="https://twitter.com/luishxyz" className="underline hover:text-gray-700">
        @luishxyz
      </a>
      . Track all Bitcoin buys in this{' '}
      <a
        href="https://docs.google.com/spreadsheets/d/1n2Exw1FUgsObaz8unkr6FdJLNqSxwNY1M5wqzuBTKC8/edit?usp=sharing"
        className="underline hover:text-gray-700"
      >
        Google Sheet containing all raw data
      </a>
      .
    </footer>
  );
}
