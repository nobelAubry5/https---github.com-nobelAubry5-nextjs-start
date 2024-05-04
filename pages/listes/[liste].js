import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

export default function liste(props) {
  console.log(props);
  const router = useRouter();
  return (
    <div>
      <h1>
        Lists of{" "}
        {router.query.liste.charAt(0).toUpperCase() +
          router.query.liste.slice(1)}
      </h1>
      <table className="mx-auto">
        <tbody>
          {props.listeEnCours.map((el) => (
            <tr key={uuidv4()} className="border border-slate-800 text-center">
              <td className="py-3 px-8 mr-4 border border-slate-800">
                {el.en}
              </td>
              <td className="py-3 px-8 ml-4 border border-slate-800">
                {el.fr}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export async function getStaticProps(context) {
  const slug = context.params.liste;
  const data = await import("/data/lists.json");
  const listeEnCours = data.englishList.find((list) => list.name === slug);
  return {
    props: { listeEnCours: listeEnCours.data },
  };
}
export async function getStaticPaths() {
  const data = await import("/data/lists.json");
  const paths = data.englishList.map((item) => ({
    params: { liste: item.name },
  }));
  return {
    // paths: [{ params: { liste: "words" } }],
    paths,
    fallback: false, //Obligé si jamais il y a un problème, il renvoit à la page 404
  };
}
