import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit-20"
  );

  const getAllPokemons = async () => {
    const res = await axios.get(loadMore);
    console.log(res.data);
    setLoadMore(res.data.next);
  };
  return (
    <div>
      <h1>Pokemon</h1>
      <button onClick={getAllPokemons}>Load More</button>
    </div>
  );
}

export default App;
