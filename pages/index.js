import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";

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
            <tr className="border border-slate-800 text-center">
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
  return { props: { array } };
}
