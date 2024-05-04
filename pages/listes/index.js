import Link from "next/link";

export default function index(props) {
  // console.log(props.array.forEach((item) => console.log(Object.keys(item)[0])));
  // const listItems = props.array.forEach((item) =>
  //   console.log(Object.keys(item)[0])
  // );

  return (
    <div className="">
      <h1>Listes de mots</h1>
      <div className="flex flex-row justify-around">
        {props.array.map((item, index) => (
          <>
            <Link
              key={index}
              href={`/listes/${Object.keys(item)[0]}`}
              className="text-blue-500 underline"
            >{`${Object.keys(item)[0]}`}</Link>
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
