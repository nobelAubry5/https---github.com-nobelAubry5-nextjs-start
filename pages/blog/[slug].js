import Head from "next/head";
import { useRouter } from "next/router";

export default function article() {
  const router = useRouter();
  console.log(router);
  console.log(router.route);
  console.log(router.asPath);
  console.log(router.query);
  const pushHomeFunction = () => {
    router.push("/");
  };
  const pushBlogFunction = () => {
    router.push("/blog");
  };
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{router.query.slug}</title>
      </Head>
      <div>
        <button onClick={pushHomeFunction} className="bg-slate-300 py-2 px-3">
          Back home
        </button>
        {" > "}
        <button onClick={pushBlogFunction} className="bg-slate-300 py-2 px-3">
          Back to the blog
        </button>
        <h1>{router.query.slug}</h1>
      </div>
    </>
  );
}
