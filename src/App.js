import React, { useState } from "react";
import "./styles.css";
import useGiphy from "./giphy/useGiphy";

export default function App() {
  let [searchText, setSearchText] = useState("");
  const results = useGiphy(searchText);

  function handleChange(event) {
    console.log(event.target.value);
    setSearchText(event.target.value);
  }

  return (
    <div className="App">
      <h1>Giphy Search</h1>
      <input type="text" onChange={handleChange} />
      <p>
        {results.length} results for <p>{searchText}</p>
      </p>

      {results.map((result, index) => (
        <video key={index} autoPlay loop src={result} />
      ))}
    </div>
  );
}
