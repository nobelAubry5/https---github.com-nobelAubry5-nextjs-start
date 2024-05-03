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
    <div>
      <h1>Article 1</h1>
      <button onClick={pushBlogFunction}>Back to the blog</button>
      <button onClick={pushHomeFunction}>Back home</button>
    </div>
  );
}
