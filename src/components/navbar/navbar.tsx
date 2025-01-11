import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <Link href="/">
        <div className="text-xl font-bold">PLR GLOBAL FX .</div>
      </Link>
      <ul className="flex items-center space-x-4">
        <li>
          <Link href="/">
            <div>Home</div>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <div>About</div>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <div>contact</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
