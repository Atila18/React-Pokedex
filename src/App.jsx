import "./App.css";
import PokemonCard from "./componants/PokemonCard";
import { useState } from "react";
import NavBar from "./componants/NavBar";

const pokemonList = [
  {
    color: "plante-poison",
    name: "Bulbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    color: "plante-poison",
    name: "Herbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
  {
    color: "plante-poison",
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
    color: "feu-vol",
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
    color: "insecte",
    name: "Chenipan",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
  },
  {
    color: "insecte",
    name: "Chrysacier",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
  },
  {
    color: "insecte-vol",
    name: "Papillusion",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
  },
  {
    color: "insecte-poison",
    name: "Aspicot",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
  },
  {
    color: "insecte-poison",
    name: "Coconfort",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
  },
  {
    color: "insecte-poison",
    name: "Dardagnan",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
  },
  {
    color: "electrique",
    name: "Pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    color: "psy",
    name: "Mew",
  },
];

function App() {
  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);
  const currentPokemon = pokemonList[currentPokemonIndex];
  return (
    <div className="App">
      <PokemonCard pokemon={currentPokemon} />
      <NavBar
        currentPokemonIndex={currentPokemonIndex}
        setCurrentPokemonIndex={setCurrentPokemonIndex}
        pokemonList={pokemonList}
      />
    </div>
  );
}

export default App;
