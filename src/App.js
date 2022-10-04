import "./styles.css";
import { useState, useEffect } from "react";

const AgarrarPokemon = () => {
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/130")
      .then((response) => response.json())
      .then((allpokemon) => setPokemon(allpokemon.name));
  }, []);

  return <>{pokemon}</>;
};

export default function App() {
  return (
    <>
      <AgarrarPokemon />
      <h1>Hola</h1>
    </>
  );
}
