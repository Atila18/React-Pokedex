const pokemonList = [
  {
    data: {
      type: "Plante Poison",
      categorie: "Pokemon Graine",
      size: 0.7,
      poids: 6.9,
      sex: "87.5% Male  12.5% Femelle",
    },
    id: 1,
    color: "plante-poison",
    name: "Bulbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    data: {
      type: "Plante Poison",
      categorie: "Pokemon Graine",
      size: 1.0,
      poids: 13.0,
      sex: "87.5% Male  12.5% Femelle",
    },
    id: 2,
    color: "plante-poison",
    name: "Herbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
  {
    data: {
      type: "Plante Poison",
      categorie: "Pokemon Graine",
      size: 2.0,
      poids: 100.0,
      sex: "87.5% Male  12.5% Femelle",
    },
    id: 3,
    color: "plante-poison",
    name: "Florizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
  },
  {
    data: {
      type: "Feu",
      categorie: "Pokemon Lézard",
      size: 0.6,
      poids: 8.5,
      sex: "87.5% Male  12.5% Femelle",
    },
    id: 4,
    color: "feu",
    name: "Salamèche",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    data: {
      type: "Feu",
      categorie: "Pokemon Flamme",
      size: 1.1,
      poids: 19.0,
      sex: "87.5% Male  12.5% Femelle",
    },
    id: 5,
    color: "feu",
    name: "Reptincel",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
  },
  {
    data: {
      type: "Feu Vol",
      categorie: "Pokemon Flamme",
      size: 1.7,
      poids: 90.5,
      sex: "87.5% Male  12.5% Femelle",
    },
    id: 6,
    color: "feu-vol",
    name: "Dracaufeu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
  },
  {
    data: {
      type: "Eau",
      categorie: "Pokemon Minitortue",
      size: 0.5,
      poids: 9.0,
      sex: "87.5% Male  12.5% Femelle",
    },
    id: 7,
    color: "eau",
    name: "Carapuce",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    data: {
      type: "Eau",
      categorie: "Pokemon Tortue",
      size: 1.0,
      poids: 22.5,
      sex: "87.5% Male  12.5% Femelle",
    },
    id: 8,
    color: "eau",
    name: "Carabaffe",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
  },
  {
    data: {
      type: "Eau",
      categorie: "Pokemon Carapace",
      size: 1.6,
      poids: 85.5,
      sex: "87.5% Male  12.5% Femelle",
    },
    id: 9,
    color: "eau",
    name: "Tortank",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
  },
  {
    data: {
      type: "Insecte",
      categorie: "Pokemon Ver",
      size: 0.3,
      poids: 2.9,
      sex: "50% Mâle  50% Femelle",
    },
    id: 10,
    color: "insecte",
    name: "Chenipan",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
  },
  {
    data: {
      type: "Insecte",
      categorie: "Pokemon Cocon",
      size: 0.7,
      poids: 9.9,
      sex: "50% Mâle  50% Femelle",
    },
    id: 11,
    color: "insecte",
    name: "Chrysacier",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
  },
  {
    data: {
      type: "Insecte Vol",
      categorie: "Pokemon Papillon",
      size: 1.1,
      poids: 32.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 12,
    color: "insecte-vol",
    name: "Papillusion",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
  },
  {
    data: {
      type: "Insecte Poison",
      categorie: "Pokemon Insectopic",
      size: 0.3,
      poids: 3.2,
      sex: "50% Mâle  50% Femelle",
    },
    id: 13,
    color: "insecte-poison",
    name: "Aspicot",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
  },
  {
    data: {
      type: "Insecte Poison",
      categorie: "Pokemon Cocon",
      size: 0.6,
      poids: 10.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 14,
    color: "insecte-poison",
    name: "Coconfort",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
  },
  {
    data: {
      type: "Insecte Poison",
      categorie: "Pokemon Guêpoison",
      size: 1.0,
      poids: 29.5,
      sex: "50% Mâle  50% Femelle",
    },
    id: 15,
    color: "insecte-poison",
    name: "Dardagnan",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
  },
  {
    data: {
      type: "Normal Vol",
      categorie: "Pokemon Minioiseau",
      size: 0.3,
      poids: 1.8,
      sex: "50% Mâle  50% Femelle",
    },
    id: 16,
    color: "normal-vol",
    name: "Roucool",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
  },
  {
    data: {
      type: "Normal Vol",
      categorie: "Pokemon Oiseau",
      size: 1.1,
      poids: 30.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 17,
    color: "normal-vol",
    name: "Roucoups",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
  },
  {
    data: {
      type: "Normal Vol",
      categorie: "Pokemon Oiseau",
      size: 1.5,
      poids: 39.5,
      sex: "50% Mâle  50% Femelle",
    },
    id: 18,
    color: "normal-vol",
    name: "Roucarnage",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
  },
  {
    data: {
      type: "Normal",
      categorie: "Pokemon Souris",
      size: 0.3,
      poids: 3.5,
      sex: "50% Mâle  50% Femelle",
    },
    id: 19,
    color: "normal",
    name: "Rattata",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
  },
  {
    data: {
      type: "Normal",
      categorie: "Pokemon Souris",
      size: 0.7,
      poids: 18.5,
      sex: "50% Mâle  50% Femelle",
    },
    id: 20,
    color: "normal",
    name: "Rattatac",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
  },
  {
    data: {
      type: "Normal Vol",
      categorie: "Pokemon Minioiseau",
      size: 0.3,
      poids: 2.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 21,
    color: "normal-vol",
    name: "Piafabec",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",
  },
  {
    data: {
      type: "Normal Vol",
      categorie: "Pokemon Bec-Oiseau",
      size: 1.2,
      poids: 38.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 22,
    color: "normal-vol",
    name: "Rapasdepic",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
  },
  {
    data: {
      type: "Poison",
      categorie: "Pokemon Serpent",
      size: 2.0,
      poids: 6.9,
      sex: "50% Mâle  50% Femelle",
    },
    id: 23,
    color: "poison",
    name: "Abo",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",
  },
  {
    data: {
      type: "Poison",
      categorie: "Pokemon Cobra",
      size: 3.5,
      poids: 65.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 24,
    color: "poison",
    name: "Arbok",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
  },
  {
    data: {
      type: "Électrique",
      categorie: "Pokemon Souris",
      size: 0.4,
      poids: 6.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 25,
    color: "electrique",
    name: "Pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    data: {
      type: "Électrique",
      categorie: "Pokemon Souris",
      size: 0.8,
      poids: 30.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 26,
    color: "electrique",
    name: "Raichu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
  },
  {
    data: {
      type: "Sol",
      categorie: "Pokemon Souris",
      size: 0.6,
      poids: 12.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 27,
    color: "sol",
    name: "Sabelette",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png",
  },
  {
    data: {
      type: "Sol",
      categorie: "Pokemon Souris",
      size: 1.0,
      poids: 29.5,
      sex: "50% Mâle  50% Femelle",
    },
    id: 28,
    color: "sol",
    name: "Sablaireau",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png",
  },
  {
    data: {
      type: "Poison",
      categorie: "Pokemon Vénépic",
      size: 0.4,
      poids: 7.0,
      sex: "100% Femelle",
    },
    id: 29,
    color: "poison",
    name: "Nidoran ♀",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png",
  },
  {
    data: {
      type: "Poison",
      categorie: "Pokemon Vénépic",
      size: 0.8,
      poids: 20.0,
      sex: "100% Femelle",
    },
    id: 30,
    color: "poison",
    name: "Nidorina",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png",
  },
  {
    data: {
      type: "Poison Sol",
      categorie: "Pokemon Perceur",
      size: 1.3,
      poids: 60.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 31,
    color: "poison-sol",
    name: "Nidoqueen",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",
  },
  {
    data: {
      type: "Poison",
      categorie: "Pokemon Vénépic",
      size: 0.5,
      poids: 9.0,
      sex: "100% Male",
    },
    id: 32,
    color: "poison",
    name: "Nidoran ♂",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png",
  },
  {
    data: {
      type: "Poison",
      categorie: "Pokemon Vénépic",
      size: 0.9,
      poids: 19.5,
      sex: "100% Male",
    },
    id: 33,
    color: "poison",
    name: "Nidorino",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
  },
  {
    data: {
      type: "Poison Sol",
      categorie: "Pokemon Perceur",
      size: 1.4,
      poids: 62.0,
      sex: "100% Male",
    },
    id: 34,
    color: "poison-sol",
    name: "Nidoking",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png",
  },
  {
    data: {
      type: "Fée",
      categorie: "Pokemon Fée",
      size: 0.6,
      poids: 7.5,
      sex: "25% Mâle  75% Femelle",
    },
    id: 35,
    color: "fee",
    name: "Mélofée",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
  },
  {
    data: {
      type: "Fée",
      categorie: "Pokemon Fée",
      size: 1.3,
      poids: 40.0,
      sex: "25% Mâle  75% Femelle",
    },
    id: 36,
    color: "fee",
    name: "Mélodelfe",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png",
  },
  {
    data: {
      type: "Feu",
      categorie: "Pokemon Renard",
      size: 0.6,
      poids: 9.9,
      sex: "25% Mâle  75% Femelle",
    },
    id: 37,
    color: "feu",
    name: "Goupix",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
  },
  {
    data: {
      type: "Feu",
      categorie: "Pokemon Renard",
      size: 1.1,
      poids: 19.9,
      sex: "25% Mâle  75% Femelle",
    },
    id: 38,
    color: "feu",
    name: "Fennard",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
  },
  {
    data: {
      type: "Normal Fée",
      categorie: "Pokemon Bouboule",
      size: 0.5,
      poids: 5.5,
      sex: "25% Mâle  75% Femelle",
    },
    id: 39,
    color: "psy",
    name: "Rondoudou",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
  },
  {
    data: {
      type: "Normal Fée",
      categorie: "Pokemon Bouboule",
      size: 1.0,
      poids: 12.0,
      sex: "25% Mâle  75% Femelle",
    },
    id: 40,
    color: "psy",
    name: "Grodoudou",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png",
  },
  {
    data: {
      type: "Poison Vol",
      categorie: "Pokemon Chovsouris",
      size: 0.8,
      poids: 7.5,
      sex: "50% Mâle  50% Femelle",
    },
    id: 41,
    color: "poison-vol",
    name: "Nosferapti",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png",
  },
  {
    data: {
      type: "Poison Vol",
      categorie: "Pokemon Chovsouris",
      size: 1.6,
      poids: 55.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 42,
    color: "poison-vol",
    name: "Nosferalto",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png",
  },
  {
    data: {
      type: "Plante Poison",
      categorie: "Pokemon Racine",
      size: 0.5,
      poids: 5.4,
      sex: "50% Mâle  50% Femelle",
    },
    id: 43,
    color: "plante-poison",
    name: "Mystherbe",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
  },
  {
    data: {
      type: "Plante Poison",
      categorie: "Pokemon Racine",
      size: 0.8,
      poids: 8.6,
      sex: "50% Mâle  50% Femelle",
    },
    id: 44,
    color: "plante-poison",
    name: "Ortide",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png",
  },
  {
    data: {
      type: "Plante Poison",
      categorie: "Pokemon Fleur",
      size: 1.2,
      poids: 18.6,
      sex: "50% Mâle  50% Femelle",
    },
    id: 45,
    color: "plante-poison",
    name: "Rafflesia",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png",
  },
  {
    data: {
      type: "Insecte Plante",
      categorie: "Pokemon Champignon",
      size: 0.3,
      poids: 5.4,
      sex: "50% Mâle  50% Femelle",
    },
    id: 46,
    color: "insecte-plante",
    name: "Paras",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png",
  },
  {
    data: {
      type: "Insecte Plante",
      categorie: "Pokemon Champignon",
      size: 1.0,
      poids: 29.5,
      sex: "50% Mâle  50% Femelle",
    },
    id: 47,
    color: "insecte-plante",
    name: "Parasect",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png",
  },
  {
    data: {
      type: "Insecte Poison",
      categorie: "Pokemon Vermine",
      size: 1.0,
      poids: 30.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 48,
    color: "insecte-poison",
    name: "Mimitos",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png",
  },
  {
    data: {
      type: "Insecte Poison",
      categorie: "Pokemon Papipoison",
      size: 1.5,
      poids: 12.5,
      sex: "50% Mâle  50% Femelle",
    },
    id: 49,
    color: "insecte-poison",
    name: "Aéromite",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png",
  },
  {
    data: {
      type: "Sol",
      categorie: "Pokemon Taupe",
      size: 0.2,
      poids: 0.8,
      sex: "50% Mâle  50% Femelle",
    },
    id: 50,
    color: "sol",
    name: "Taupiqueur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png",
  },
  {
    data: {
      type: "Sol",
      categorie: "Pokemon Taupe",
      size: 0.7,
      poids: 33.3,
      sex: "50% Mâle  50% Femelle",
    },
    id: 51,
    color: "sol",
    name: "Triopikeur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png",
  },
  {
    data: {
      type: "Normal",
      categorie: "Pokemon Chatdégout",
      size: 0.4,
      poids: 4.2,
      sex: "50% Mâle  50% Femelle",
    },
    id: 52,
    color: "normal",
    name: "Miaouss",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
  },
  {
    data: {
      type: "Normal",
      categorie: "Pokemon Chadeville",
      size: 1.0,
      poids: 32.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 53,
    color: "normal",
    name: "Persian",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png",
  },
  {
    data: {
      type: "Eau",
      categorie: "Pokemon Canard",
      size: 0,
      poids: 19.6,
      sex: "50% Mâle  50% Femelle",
    },
    id: 54,
    color: "eau",
    name: "Psykokwak",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
  },
  {
    data: {
      type: "Eau",
      categorie: "Pokemon Canard",
      size: 1.7,
      poids: 76.6,
      sex: "50% Mâle  50% Femelle",
    },
    id: 55,
    color: "eau",
    name: "Akwakwak",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png",
  },
  {
    data: {
      type: "Combat",
      categorie: "Pokemon Porsinge",
      size: 0.5,
      poids: 28.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 56,
    color: "combat",
    name: "Férosinge",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png",
  },
  {
    data: {
      type: "Combat",
      categorie: "Pokemon Porsinge",
      size: 1.0,
      poids: 32.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 57,
    color: "combat",
    name: "Colossinge",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png",
  },
  {
    data: {
      type: "Feu",
      categorie: "Pokemon Chiot",
      size: 0.7,
      poids: 19.0,
      sex: "75% Mâle  25% Femelle",
    },
    id: 58,
    color: "feu",
    name: "Caninos",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
  },
  {
    data: {
      type: "Feu",
      categorie: "Pokemon Légendaire",
      size: 1.9,
      poids: 155.0,
      sex: "75% Mâle  25% Femelle",
    },
    id: 59,
    color: "feu",
    name: "Arcanin",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png",
  },
  {
    data: {
      type: "Eau",
      categorie: "Pokemon Têtard",
      size: 0.6,
      poids: 12.4,
      sex: "50% Mâle  50% Femelle",
    },
    id: 60,
    color: "eau",
    name: "Ptitard",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png",
  },
  {
    data: {
      type: "Eau",
      categorie: "Pokemon Têtard",
      size: 1.0,
      poids: 20.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 61,
    color: "eau",
    name: "Têtarte",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png",
  },
  {
    data: {
      type: "Eau Combat",
      categorie: "Pokemon Têtard",
      size: 1.3,
      poids: 54.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 62,
    color: "eau-combat",
    name: "Tartard",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png",
  },
  {
    data: {
      type: "Psy",
      categorie: "Pokemon Psy",
      size: 0.9,
      poids: 19.5,
      sex: "75% Mâle  25% Femelle",
    },
    id: 63,
    color: "psy",
    name: "Abra",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png",
  },
  {
    data: {
      type: "Psy",
      categorie: "Pokemon Psy",
      size: 1.3,
      poids: 56.5,
      sex: "75% Mâle  25% Femelle",
    },
    id: 64,
    color: "psy",
    name: "Kadabra",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png",
  },
  {
    data: {
      type: "Psy",
      categorie: "Pokemon Psy",
      size: 1.5,
      poids: 48.0,
      sex: "75% Mâle  25% Femelle",
    },
    id: 65,
    color: "psy",
    name: "Alakazam",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
  },
  {
    data: {
      type: "Combat",
      categorie: "Pokemon Colosse",
      size: 0.8,
      poids: 19.5,
      sex: "75% Mâle  25% Femelle",
    },
    id: 66,
    color: "combat",
    name: "Machoc",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png",
  },
  {
    data: {
      type: "Combat",
      categorie: "Pokemon Colosse",
      size: 1.5,
      poids: 70.5,
      sex: "75% Mâle  25% Femelle",
    },
    id: 67,
    color: "combat",
    name: "Machopeur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png",
  },
  {
    data: {
      type: "Combat",
      categorie: "Pokemon Colosse",
      size: 1.6,
      poids: 130.0,
      sex: "75% Mâle  25% Femelle",
    },
    id: 68,
    color: "combat",
    name: "Mackogneur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png",
  },
  {
    data: {
      type: "Plante Poison",
      categorie: "Pokemon Fleur",
      size: 0.7,
      poids: 4.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 69,
    color: "plante-poison",
    name: "Chétiflor",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png",
  },
  {
    data: {
      type: "Plante Poison",
      categorie: "Pokemon Carnivore",
      size: 1.0,
      poids: 6.4,
      sex: "50% Mâle  50% Femelle",
    },
    id: 70,
    color: "plante-poison",
    name: "Boustiflor",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png",
  },
  {
    data: {
      type: "Plante Poison",
      categorie: "Pokemon Carnivore",
      size: 1.7,
      poids: 15.5,
      sex: "50% Mâle  50% Femelle",
    },
    id: 71,
    color: "plante-poison",
    name: "Empliflor",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png",
  },
  {
    data: {
      type: "Eau Poison",
      categorie: "Pokemon Mollusque",
      size: 0.9,
      poids: 45.5,
      sex: "50% Mâle  50% Femelle",
    },
    id: 72,
    color: "eau-poison",
    name: "Tentacool",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png",
  },
  {
    data: {
      type: "Eau Poison",
      categorie: "Pokemon Mollusque",
      size: 1.6,
      poids: 55.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 73,
    color: "eau-poison",
    name: "Tentacruel",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png",
  },
  {
    data: {
      type: "Roche Sol",
      categorie: "Pokemon Roche",
      size: 0.4,
      poids: 20.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 74,
    color: "sol-roche",
    name: "Racaillou",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
  },
  {
    data: {
      type: "Roche Sol",
      categorie: "Pokemon Roche",
      size: 1.0,
      poids: 105.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 75,
    color: "sol-roche",
    name: "Gravalanch",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png",
  },
  {
    data: {
      type: "Roche Sol",
      categorie: "Pokemon Titanesque",
      size: 1.4,
      poids: 300.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 76,
    color: "sol-roche",
    name: "Grolem",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png",
  },
  {
    data: {
      type: "Feu",
      categorie: "Pokemon Cheval Feu",
      size: 1.0,
      poids: 30.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 77,
    color: "feu",
    name: "Ponyta",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png",
  },
  {
    data: {
      type: "Feu",
      categorie: "Pokemon Cheval Feu",
      size: 1.7,
      poids: 95.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 78,
    color: "feu",
    name: "Galopa",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png",
  },
  {
    data: {
      type: "Eau Psy",
      categorie: "Pokemon Crétin",
      size: 1.2,
      poids: 36.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 79,
    color: "eau-psy",
    name: "Ramoloss",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png",
  },
  {
    data: {
      type: "EU Psy",
      categorie: "Pokemon Symbiose",
      size: 1.6,
      poids: 78.5,
      sex: "50% Mâle  50% Femelle",
    },
    id: 80,
    color: "eau-psy",
    name: "Flagadoss",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png",
  },
  {
    data: {
      type: "Électrique Acier",
      categorie: "Pokemon Magnétique",
      size: 0.3,
      poids: 6.0,
      sex: "Asexué",
    },
    id: 81,
    color: "electrique-acier",
    name: "Magnéti",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png",
  },
  {
    data: {
      type: "Électrique Acier",
      categorie: "Pokemon Magnétique",
      size: 1.0,
      poids: 60.0,
      sex: "Asexué",
    },
    id: 82,
    color: "electrique-acier",
    name: "Magnéton",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png",
  },
  {
    data: {
      type: "Normal Vol",
      categorie: "Pokemon Canard Fou",
      size: 0.8,
      poids: 15.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 83,
    color: "normal-vol",
    name: "Canarticho",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png",
  },
  {
    data: {
      type: "Normal Vol",
      categorie: "Pokemon Duoiseau",
      size: 1.4,
      poids: 39.2,
      sex: "50% Mâle  50% Femelle",
    },
    id: 84,
    color: "normal-vol",
    name: "Doduo",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png",
  },
  {
    data: {
      type: "Normal Vol",
      categorie: "Pokemon Trioiseau",
      size: 1.8,
      poids: 85.2,
      sex: "50% Mâle  50% Femelle",
    },
    id: 85,
    color: "normal-vol",
    name: "Dodrio",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png",
  },
  {
    data: {
      type: "Eau",
      categorie: "Pokemon Otarie",
      size: 1.1,
      poids: 90.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 86,
    color: "eau",
    name: "Otaria",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png",
  },
  {
    data: {
      type: "Eau Glace",
      categorie: "Pokemon Otarie",
      size: 1.7,
      poids: 120.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 87,
    color: "eau-glace",
    name: "Lamantine",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png",
  },
  {
    data: {
      type: "Poison",
      categorie: "Pokemon Dégueu",
      size: 0.9,
      poids: 30.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 88,
    color: "poison",
    name: "Tadmorv",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png",
  },
  {
    data: {
      type: "Poison",
      categorie: "Pokemon Dégueu",
      size: 1.2,
      poids: 30.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 89,
    color: "poison",
    name: "Grotadmorv",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png",
  },
  {
    data: {
      type: "Eau",
      categorie: "Pokemon Bivalve",
      size: 0.3,
      poids: 4.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 90,
    color: "eau",
    name: "Kokiyas",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png",
  },
  {
    data: {
      type: "Eau Glace",
      categorie: "Pokemon Bivalve",
      size: 1.5,
      poids: 132.5,
      sex: "50% Mâle  50% Femelle",
    },
    id: 91,
    color: "eau-glace",
    name: "Crustabri",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png",
  },
  {
    data: {
      type: "Spectre Poison",
      categorie: "Pokemon Gaz",
      size: 1.3,
      poids: 0.1,
      sex: "50% Mâle  50% Femelle",
    },
    id: 92,
    color: "spectre-poison",
    name: "Fantominus",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png",
  },
  {
    data: {
      type: "Spectre Poison",
      categorie: "Pokemon Gaz",
      size: 1.6,
      poids: 0.1,
      sex: "50% Mâle  50% Femelle",
    },
    id: 93,
    color: "spectre-poison",
    name: "Spectrum",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png",
  },
  {
    data: {
      type: "Spectre Poison",
      categorie: "Pokemon Ombre",
      size: 1.5,
      poids: 40.5,
      sex: "50% Mâle  50% Femelle",
    },
    id: 94,
    color: "spectre-poison",
    name: "Ectoplasma",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
  },
  {
    data: {
      type: "Roche Sol",
      categorie: "Pokemon Serpenroc",
      size: 8.8,
      poids: 210.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 95,
    color: "sol-roche",
    name: "Onix",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png",
  },
  {
    data: {
      type: "Psy",
      categorie: "Pokemon Hypnose",
      size: 1.0,
      poids: 32.4,
      sex: "50% Mâle  50% Femelle",
    },
    id: 96,
    color: "psy",
    name: "Soporifik",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png",
  },
  {
    data: {
      type: "Psy",
      categorie: "Pokemon Hypnose",
      size: 1.6,
      poids: 75.6,
      sex: "50% Mâle  50% Femelle",
    },
    id: 97,
    color: "psy",
    name: "Hypnomade",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
  },
  {
    data: {
      type: "Eau",
      categorie: "Pokemon Doux Crabe",
      size: 0.4,
      poids: 6.5,
      sex: "50% Mâle  50% Femelle",
    },
    id: 98,
    color: "eau",
    name: "Krabby",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png",
  },
  {
    data: {
      type: "Eau",
      categorie: "Pokemon Pince",
      size: 1.3,
      poids: 60.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 99,
    color: "eau",
    name: "Krabboss",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png",
  },
  {
    data: {
      type: "Électrique",
      categorie: "Pokemon Balle",
      size: 0.5,
      poids: 10.4,
      sex: "Asexué",
    },
    id: 100,
    color: "electrique",
    name: "Voltorbe",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png",
  },
  {
    data: {
      type: "Électrique",
      categorie: "Pokemon Balle",
      size: 1.2,
      poids: 66.6,
      sex: "Asexué",
    },
    id: 101,
    color: "electrique",
    name: "Électrode",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png",
  },
  {
    data: {
      type: "Plante Psy",
      categorie: "Pokemon Oeuf",
      size: 0.4,
      poids: 2.5,
      sex: "50% Mâle  50% Femelle",
    },
    id: 102,
    color: "plante-psy",
    name: "Noeunoeuf",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png",
  },
  {
    data: {
      type: "Plante Psy",
      categorie: "Pokemon Fruitpalme",
      size: 2.0,
      poids: 120.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 103,
    color: "plante-psy",
    name: "Noadkoko",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png",
  },
  {
    data: {
      type: "Sol",
      categorie: "Pokemon Solitaire",
      size: 0.4,
      poids: 6.5,
      sex: "50% Mâle  50% Femelle",
    },
    id: 104,
    color: "sol",
    name: "Osselait",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png",
  },
  {
    data: {
      type: "Sol",
      categorie: "Pokemon Gard'Os",
      size: 1.0,
      poids: 45.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 105,
    color: "sol",
    name: "Ossatueur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png",
  },
  {
    data: {
      type: "Combat",
      categorie: "Pokemon Latteur",
      size: 1.5,
      poids: 49.8,
      sex: "100% Male",
    },
    id: 106,
    color: "combat",
    name: "Kicklee",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png",
  },
  {
    data: {
      type: "Combat",
      categorie: "Pokemon Puncheur",
      size: 1.4,
      poids: 50.2,
      sex: "100% Male",
    },
    id: 107,
    color: "combat",
    name: "Tygnon",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png",
  },
  {
    data: {
      type: "Normal",
      categorie: "Pokemon Lécheur",
      size: 1.2,
      poids: 65.5,
      sex: "50% Mâle  50% Femelle",
    },
    id: 108,
    color: "normal",
    name: "Excelangue",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png",
  },
  {
    data: {
      type: "Poison",
      categorie: "Pokemon Gaz Mortel",
      size: 0.6,
      poids: 1.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 109,
    color: "poison",
    name: "Smogo",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png",
  },
  {
    data: {
      type: "Poison",
      categorie: "Pokemon Gaz Mortel",
      size: 1.2,
      poids: 9.5,
      sex: "50% Mâle  50% Femelle",
    },
    id: 110,
    color: "poison",
    name: "Smogogo",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png",
  },
  {
    data: {
      type: "Sol Roche",
      categorie: "Pokemon Piquant",
      size: 1.0,
      poids: 115.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 111,
    color: "sol-roche",
    name: "Rhinocorne",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png",
  },
  {
    data: {
      type: "Sol Roche",
      categorie: "Pokemon Perceur",
      size: 1.9,
      poids: 120.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 112,
    color: "sol-roche",
    name: "Rhinoféros",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png",
  },
  {
    data: {
      type: "Normal",
      categorie: "Pokemon Oeuf",
      size: 1.1,
      poids: 34.6,
      sex: "100% Femelle",
    },
    id: 113,
    color: "normal",
    name: "Leveinard",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png",
  },
  {
    data: {
      type: "Plante",
      categorie: "Pokemon Vigne",
      size: 1.0,
      poids: 35.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 114,
    color: "plante",
    name: "Saquedeneu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png",
  },
  {
    data: {
      type: "Normal",
      categorie: "Pokemon Maternel",
      size: 2.2,
      poids: 80.0,
      sex: "100% Femelle",
    },
    id: 115,
    color: "normal",
    name: "Kangourex",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png",
  },
  {
    data: {
      type: "Eau",
      categorie: "Pokemon Dragon",
      size: 0.4,
      poids: 8.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 116,
    color: "eau",
    name: "Hypotrempe",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png",
  },
  {
    data: {
      type: "Eau",
      categorie: "Pokemon Dragon",
      size: 1.2,
      poids: 25.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 117,
    color: "eau",
    name: "Hypocéan",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png",
  },
  {
    data: {
      type: "Eau",
      categorie: "Pokemon Poisson",
      size: 0.6,
      poids: 15.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 118,
    color: "eau",
    name: "Poissirène",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png",
  },
  {
    data: {
      type: "Eau",
      categorie: "Pokemon Poisson",
      size: 1.3,
      poids: 39.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 119,
    color: "eau",
    name: "Poissoroy",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png",
  },
  {
    data: {
      type: "Eau",
      categorie: "Pokemon Étoile",
      size: 0.8,
      poids: 34.5,
      sex: "Asexué",
    },
    id: 120,
    color: "eau",
    name: "Stari",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png",
  },
  {
    data: {
      type: "Eau Psy",
      categorie: "Pokemon Mystérieu",
      size: 1.1,
      poids: 80.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 121,
    color: "eau-psy",
    name: "Staross",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png",
  },
  {
    data: {
      type: "Psy Fée",
      categorie: "Pokemon Bloqueur",
      size: 1.3,
      poids: 54.5,
      sex: "50% Mâle  50% Femelle",
    },
    id: 122,
    color: "psy-fee",
    name: "M.Mime",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png",
  },
  {
    data: {
      type: "Insece Vol",
      categorie: "Pokemon Mante",
      size: 1.5,
      poids: 56.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 123,
    color: "insecte-vol",
    name: "Insécateur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png",
  },
  {
    data: {
      type: "Glace Psy",
      categorie: "Pokemon Humanoïde",
      size: 1.4,
      poids: 40.6,
      sex: "100% Femelle",
    },
    id: 124,
    color: "eau-psy",
    name: "Lippoutou",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png",
  },
  {
    data: {
      type: "Électrique",
      categorie: "Pokemon Électrique",
      size: 1.1,
      poids: 30.0,
      sex: "75% Mâle  25% Femelle",
    },
    id: 125,
    color: "electrique",
    name: "Elektek",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png",
  },
  {
    data: {
      type: "Feu",
      categorie: "Pokemon Crache Feu",
      size: 1.3,
      poids: 44.5,
      sex: "75% Mâle  25% Femelle",
    },
    id: 126,
    color: "feu",
    name: "Magmar",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png",
  },
  {
    data: {
      type: "Insecte",
      categorie: "Pokemon Scarabée",
      size: 1.5,
      poids: 55.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 127,
    color: "insecte",
    name: "Scarabrute",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png",
  },
  {
    data: {
      type: "Normal",
      categorie: "Pokemon Buffle",
      size: 1.4,
      poids: 88.4,
      sex: "100% Mâle",
    },
    id: 128,
    color: "normal",
    name: "Tauros",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png",
  },
  {
    data: {
      type: "Eau",
      categorie: "Pokemon Poisson",
      size: 0.9,
      poids: 10.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 129,
    color: "eau",
    name: "Magicarpe",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
  },
  {
    data: {
      type: "Eau Vol",
      categorie: "Pokemon Terrifiant",
      size: 6.5,
      poids: 235.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 130,
    color: "eau-vol",
    name: "Léviator",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png",
  },
  {
    data: {
      type: "Eau Glace",
      categorie: "Pokemon Transport",
      size: 2.5,
      poids: 220.0,
      sex: "50% Mâle  50% Femelle",
    },
    id: 131,
    color: "eau-glace",
    name: "Lokhlass",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png",
  },
  {
    data: {
      type: "Normal",
      categorie: "Pokemon Morphing",
      size: 0.3,
      poids: 4.0,
      sex: "Asexué",
    },
    id: 132,
    color: "normal",
    name: "Métamorph",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
  },
  {
    data: {
      type: "Normal",
      categorie: "Pokemon Évolutif",
      size: 0.3,
      poids: 6.5,
      sex: "87.5% Mâle  12.5% Femelle",
    },
    id: 133,
    color: "normal",
    name: "Evoli",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
  },
  {
    data: {
      type: "Eau",
      categorie: "Pokemon Bulleur",
      size: 1.0,
      poids: 29.0,
      sex: "87.5% Mâle  12.5% Femelle",
    },
    id: 134,
    color: "eau",
    name: "Aquali",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png",
  },
  {
    data: {
      type: "Électrique",
      categorie: "Pokemon Orage",
      size: 0.8,
      poids: 24.5,
      sex: "87.5% Mâle  12.5% Femelle",
    },
    id: 135,
    color: "electrique",
    name: "Voltali",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
  },
  {
    data: {
      type: "Feu",
      categorie: "Pokemon Flamme",
      size: 0.9,
      poids: 25.0,
      sex: "87.5% Mâle  12.5% Femelle",
    },
    id: 136,
    color: "feu",
    name: "Pyroli",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png",
  },
  {
    data: {
      type: "Normal",
      categorie: "Pokemon Virtuel",
      size: 0.78,
      poids: 36.5,
      sex: "Asexué",
    },
    id: 137,
    color: "normal",
    name: "Porygon",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png",
  },
  {
    data: {
      type: "Roche Eau",
      categorie: "Pokemon Spirale",
      size: 0.4,
      poid: 7.5,
      sex: "87.5% Mâle  12.5% Femelle",
    },
    id: 138,
    color: "roche-eau",
    name: "Amonita",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png",
  },
  {
    data: {
      type: "Roche Eau",
      categorie: "Pokemon Spirale",
      size: 1.0,
      poids: 35.0,
      sex: "87.5% Mâle  12.5% Femelle",
    },
    id: 139,
    color: "roche-eau",
    name: "Amonistar",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png",
  },
  {
    data: {
      type: "Roche Eau",
      categorie: "Pokemon Carapace",
      size: 0.5,
      poids: 11.5,
      sex: "87.5% Mâle  12.5% Femelle",
    },
    id: 140,
    color: "roche-eau",
    name: "Kabuto",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png",
  },
  {
    data: {
      type: "Roche Eau",
      categorie: "Pokemon Carapace",
      size: 1.3,
      poids: 40.5,
      sex: "87.5% Mâle  12.5% Femelle",
    },
    id: 141,
    color: "roche-eau",
    name: "Kabutops",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png",
  },
  {
    data: {
      type: "Roche Vol",
      categorie: "Pokemon Fossile",
      size: 0.7,
      poids: 6.9,
      sex: "87.5% Mâle  12.5% Femelle",
    },
    id: 142,
    color: "roche-vol",
    name: "Ptéra",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png",
  },
  {
    data: {
      type: "Normal",
      categorie: "Pokemon Pionceur",
      size: 2.1,
      poids: 460.0,
      sex: "87.5% Mâle  12.5% Femelle",
    },
    id: 143,
    color: "normal",
    name: "Ronflex",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
  },
  {
    data: {
      type: "Glace Vol",
      categorie: "Pokemon Glaciaire",
      size: 1.7,
      poids: 55.4,
      sex: "Asexué",
    },
    id: 144,
    color: "glace-vol",
    name: "Artikodin",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png",
  },
  {
    data: {
      type: "Électrique Vol",
      categorie: "Pokemon Graine",
      size: 0.7,
      poids: 6.9,
      sex: "Male",
    },
    id: 145,
    color: "electrique-vol",
    name: "Electhor",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png",
  },
  {
    data: {
      type: "Feu Vol",
      categorie: "Pokemon Flamme",
      size: 2.0,
      poids: 60.0,
      sex: "Asexué",
    },
    id: 146,
    color: "feu-vol",
    name: "Sulfura",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png",
  },
  {
    data: {
      type: "Dragon",
      categorie: "Pokemon Dragon",
      size: 1.8,
      poids: 3.3,
      sex: "50% Male  50% Femelle",
    },
    id: 147,
    color: "dragon",
    name: "Minidraco",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png",
  },
  {
    data: {
      type: "Dragon",
      categorie: "Pokemon Dragon",
      size: 4.0,
      poids: 16.5,
      sex: "50% Male  50% Femelle",
    },
    id: 148,
    color: "dragon",
    name: "Draco",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png",
  },
  {
    data: {
      type: "Dragon Vol",
      categorie: "Pokemon Dragon",
      size: 2.2,
      poids: 210.0,
      sex: " 50% Mâle  50% Femelle",
    },
    id: 149,
    color: "dragon-vol",
    name: "Dracolosse",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
  },
  {
    data: {
      type: "Psy",
      categorie: "Pokemon Génétique",
      size: 2.0,
      poids: 122.0,
      sex: "Asexué",
    },
    id: 150,
    color: "psy",
    name: "Mewtwo",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
  },
  {
    data: {
      type: "Psy",
      categorie: "Pokemon Nouveau",
      size: 0.4,
      poids: 4.0,
      sex: "Asexué",
    },
    id: 151,
    color: "psy",
    name: "Mew",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
  },
];
export default pokemonList;
