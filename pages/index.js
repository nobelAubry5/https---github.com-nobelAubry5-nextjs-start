import Head from "next/head";
import { useState, useEffect } from "react";
// import { redirect } from "next/dist/server/api-utils";
import { v4 as uuidv4 } from "uuid";

export default function Home(props) {
  const [state, setState] = useState(false);
  useEffect(() => {
    newWord();
  }, []);
  const newWord = () => {
    fetch("/api/vocapi")
      .then((response) => response.json())
      .then((data) => setState(data));
  };
  console.log(state);
  let randomWord;
  if (state) {
    const array = state.englishList[0].data;
    randomWord = array[Math.floor(Math.random() * array.length)].en;
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Accueil</title>
      </Head>
      <h1>Mots au hasard</h1>
      <button
        className="bg-green-700 rounded-md text-white py-4 px-2"
        onClick={newWord}
      >
        Get random words
      </button>
      <p>{randomWord}</p>
      {/* <table className="mx-auto">
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
      </table> */}
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
