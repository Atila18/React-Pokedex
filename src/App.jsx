import "./App.css";
import PokemonCard from "./componants/PokemonCard";
import { useState } from "react";
import NavBar from "./componants/NavBar";
import pokemonList from "./pokemonList";

function App() {
  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);
  const pokemonListLength = pokemonList.length;
  const handleClickPrev = () => {
    if (currentPokemonIndex > 0) {
      setCurrentPokemonIndex(currentPokemonIndex - 1);
    }
  };
  const handleClickNext = () => {
    if (currentPokemonIndex < pokemonListLength - 1) {
      setCurrentPokemonIndex(currentPokemonIndex + 1);
    }
  };
  const currentPokemon = pokemonList[currentPokemonIndex];
  return (
    <div className="App">
      <PokemonCard pokemon={currentPokemon} />
      <button onClick={handleClickPrev} disabled={currentPokemonIndex === 0}>
        Précédent
      </button>
      <button
        onClick={handleClickNext}
        disabled={currentPokemonIndex === pokemonListLength - 1}
      >
        Suivant
      </button>
    </div>
  );
}

export default App;
