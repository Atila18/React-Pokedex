import PropTypes from "prop-types";
import { useState } from "react";

function NavBar({ currentPokemonIndex, setCurrentPokemonIndex, pokemonList }) {
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

  return (
    <>
      <button onClick={handleClickPrev} disabled={currentPokemonIndex === 0}>
        Précédent
      </button>
      <button
        onClick={handleClickNext}
        disabled={currentPokemonIndex === pokemonListLength - 1}
      >
        Suivant
      </button>
    </>
  );
}
export default NavBar;
