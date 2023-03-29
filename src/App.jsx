import "./App.css";
import PokemonCard from "./componants/PokemonCard";
import { useState } from "react";

const pokemonList = [
  {
    color: "plante",
    name: "Bulbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    color: "plante",
    name: "Herbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
  {
    color: "plante",
    name: "Florizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
  },
  {
    color: "feu",
    name: "Salamèche",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    color: "feu",
    name: "Reptincel",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
  },
  {
    color: "feu",
    name: "Dracaufeu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
  },
  {
    color: "eau",
    name: "Carapuce",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    color: "eau",
    name: "Carabaffe",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
  },
  {
    color: "eau",
    name: "Tortank",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
  },
  {
    name: "Chenipan",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

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
