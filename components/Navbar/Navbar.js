import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-col w-1/2 p-4 bg-slate-200">
      <Link href="/" className="font-bold">
        Accueil
      </Link>
      <Link href="/blog" className="font-bold">
        Blog
      </Link>
      <Link href={`/blog/article`} className="font-bold ml-2">
        Article 1
      </Link>
      <Link href={`/blog/article/reservation`} className="font-bold ml-4">
        Sous-Article 1
      </Link>
      <Link href="/contact" className="font-bold">
        Contact
      </Link>
    </nav>
  );
}
