export default function contact(props) {
  console.log(props);
  return (
    <div>
      <h1>Random joke</h1>
      <p>
        <strong>Category: </strong>
        {props.data.category}
      </p>
      <p>
        <strong>Setup: </strong>
        {props.data.setup}
      </p>
      <p>
        <strong>Joke delivery: </strong> {props.data.delivery}
      </p>
    </div>
  );
}
export async function getStaticProps() {
  const joke = await fetch("https://v2.jokeapi.dev/joke/Any?lang=fr");
  const data = await joke.json();
  return {
    props: { data },
    revalidate: 20, // revalidate should be inside the return object
  };
}
//https://goquotes-api.herokuapp.com/api/v1/random?count=1
