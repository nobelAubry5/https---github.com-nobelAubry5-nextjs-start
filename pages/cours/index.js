export default function cours(props) {
  console.log(props);

  return (
    <div>
      <h1>
        BTC est à: <strong>{props.results.bpi.USD.rate}</strong>
      </h1>
    </div>
  );
}
//https://api.coindesk.com/v1/bpi/currentprice/USD.json

export async function getServerSideProps() {
  const data = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice/USD.json"
  );
  const results = await data.json();
  return {
    props: {
      results,
    },
  };
}
