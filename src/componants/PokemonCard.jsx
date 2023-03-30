import PropTypes from "prop-types";

function PokemonCard(props) {
  return (
    <figure className={props.pokemon.color}>
      <p>N°</p>
      {props.pokemon.imgSrc ? (
        <img src={props.pokemon.imgSrc} alt="" />
      ) : (
        <p>???</p>
      )}
      <figcaption>{props.pokemon.name}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonCard;
