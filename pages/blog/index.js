import Link from "next/link";
export default function index() {
  return (
    <div className="flex flex-col">
      Bienvenue sur le Blog
      <Link href={`blog/Nextjs-Cours 1`} className="underline text-blue-500">
        Nextjs-Cours 1
      </Link>
    </div>
  );
}
