function PokemonCard(props) {
  return (
    <figure>
      {props.pokemon.imgSrc ? (
        <img src={props.pokemon.imgSrc} alt="" />
      ) : (
        <p>???</p>
      )}
      <figcaption>{props.pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
