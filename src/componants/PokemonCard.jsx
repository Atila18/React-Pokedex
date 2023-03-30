import PropTypes from "prop-types";

function PokemonCard(props) {
  return (
    <figure className={props.pokemon.color}>
      <p>N°{props.pokemon.id}</p>
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
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonCard;
