import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

export default function index(props) {
  // console.log(props.array.forEach((item) => console.log(Object.keys(item)[0])));

  return (
    <div className="">
      <h1>Listes de vocabulaires</h1>
      <div className="flex flex-row justify-around">
        {props.array.map((item) => (
          <>
            <Link
              key={uuidv4()}
              href={`/listes/${item.name}`}
              className="text-blue-500 underline"
            >{`${item.name}`}</Link>
          </>
        ))}
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const data = await import(`/data/lists.json`);
  const array = data.englishList;
  return { props: { array } };
}
