import { useEffect, useState } from "react";

export default function App() {
  const [quote, setQuote] = useState('');

  async function GetQuotes() {
    const res = await fetch('http://dummyjson.com/quotes/random');
    const data = await res.json();
    console.log(data);
    setQuote(`${data.quote} - ${data.author}`);
  }

  useEffect(function() {
    GetQuotes();
  },[]);

  return (
    <div className="App">
      <h1>{quote}</h1>
      <button onClick={GetQuotes}>Generate</button>
    </div>
  );
}

