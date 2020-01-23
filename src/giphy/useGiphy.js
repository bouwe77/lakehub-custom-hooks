import { useState, useEffect } from "react";
import { getGifs } from "./api";

export default function useGiphy(searchText) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    getGifs(searchText).then(result => setResults(result));
  }, [searchText]);

  return results;
}
