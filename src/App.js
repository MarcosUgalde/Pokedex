import React, { useState, useEffect } from "react";
import axios from "axios";
import Pokecard from "./Pokecard";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit-20"
  );

  const getAllPokemon = async () => {
    const res = await axios.get(loadMore);
    setLoadMore(res.data.next);

    const createPokemonObject = (result) => {
      result.forEach(async (pokemon) => {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setAllPokemons((currentList) => [...currentList, res.data]);
      });
    };
    createPokemonObject(res.data.results);
    console.log(allPokemons);
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  return (
    <div className="app-container">
      <h1>Pokemon</h1>
      <button onClick={getAllPokemon}>Load More!</button>
    </div>
  );
}

export default App;
