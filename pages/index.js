import Head from "next/head";
// import { redirect } from "next/dist/server/api-utils";
import { v4 as uuidv4 } from "uuid";
export default function Home(props) {
  console.log(props);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Accueil</title>
      </Head>
      <h1>Vocabulaire de base</h1>
      <table className="mx-auto">
        <tbody>
          {props.array.map((el) => (
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
    </>
  );
}
export async function getStaticProps() {
  const data = await import(`/data/vocabulary.json`);
  const array = data.vocabulary;
  // if (array.length === 0) {
  //   return {
  //     notFound: true, // Si le fichier json est vide, affichage de la page 404
  //   };
  // }
  // if (array.length === 0) {
  //   return {
  //     redirect: { destination: "/joke" }, // Si le fichier json est vide, redirection vers la page joke
  //   };
  // }
  return { props: { array } };
}
