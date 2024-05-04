import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-center py-4 bg-slate-200">
      <Link href="/" className="font-bold mx-2">
        Accueil
      </Link>
      <Link href="/listes" className="font-bold mx-2">
        Vocabulaires
      </Link>

      <Link href="/joke" className="font-bold mx-2">
        Joke
      </Link>
      <Link href="/cours" className="font-bold mx-2">
        BTC
      </Link>
      <Link href="/add" className="font-bold mx-2">
        Add word
      </Link>
    </nav>
  );
}
