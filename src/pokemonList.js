const pokemonList = [
  {
    id: 1,
    color: "plante-poison",
    name: "Bulbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    id: 2,
    color: "plante-poison",
    name: "Herbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
  {
    id: 3,
    color: "plante-poison",
    name: "Florizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
  },
  {
    id: 4,
    color: "feu",
    name: "Salamèche",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    id: 5,
    color: "feu",
    name: "Reptincel",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
  },
  {
    id: 6,
    color: "feu-vol",
    name: "Dracaufeu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
  },
  {
    id: 7,
    color: "eau",
    name: "Carapuce",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    id: 8,
    color: "eau",
    name: "Carabaffe",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
  },
  {
    id: 9,
    color: "eau",
    name: "Tortank",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
  },
  {
    id: 10,
    color: "insecte",
    name: "Chenipan",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
  },
  {
    id: 11,
    color: "insecte",
    name: "Chrysacier",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
  },
  {
    id: 12,
    color: "insecte-vol",
    name: "Papillusion",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
  },
  {
    id: 13,
    color: "insecte-poison",
    name: "Aspicot",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
  },
  {
    id: 14,
    color: "insecte-poison",
    name: "Coconfort",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
  },
  {
    id: 15,
    color: "insecte-poison",
    name: "Dardagnan",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
  },
  {
    id: 16,
    color: "normal-vol",
    name: "Roucool",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
  },
  {
    id: 17,
    color: "normal-vol",
    name: "Roucoups",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
  },
  {
    id: 18,
    color: "normal-vol",
    name: "Roucarnage",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
  },
  {
    id: 19,
    color: "normal",
    name: "Rattata",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
  },
  {
    id: 20,
    color: "normal",
    name: "Rattatac",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
  },
  {
    id: 21,
    color: "normal-vol",
    name: "Piafabec",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",
  },
  {
    id: 22,
    color: "normal-vol",
    name: "Rapasdepic",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
  },
  {
    id: 23,
    color: "poison",
    name: "Abo",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",
  },
  {
    id: 24,
    color: "poison",
    name: "Arbok",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
  },
  {
    id: 25,
    color: "electrique",
    name: "Pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    id: 26,
    color: "electrique",
    name: "Raichu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
  },
  {
    id: 27,
    color: "sol",
    name: "Sabelette",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png",
  },
  {
    id: 28,
    color: "sol",
    name: "Sablaireau",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png",
  },
  {
    id: 29,
    color: "poison",
    name: "Nidoran ♀",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png",
  },
  {
    id: 30,
    color: "poison",
    name: "Nidorina",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png",
  },
  {
    id: 31,
    color: "poison-sol",
    name: "Nidoqueen",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",
  },
  {
    id: 32,
    color: "poison",
    name: "Nidoran ♂",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png",
  },
  {
    id: 33,
    color: "poison",
    name: "Nidorino",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
  },
  {
    id: 34,
    color: "poison-sol",
    name: "Nidoking",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png",
  },
  {
    id: 35,
    color: "fee",
    name: "Mélofée",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
  },
  {
    id: 36,
    color: "fee",
    name: "Mélodelfe",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png",
  },
  {
    id: 37,
    color: "feu",
    name: "Goupix",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
  },
  {
    id: 38,
    color: "feu",
    name: "Fennard",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
  },
  {
    id: 39,
    color: "psy",
    name: "Rondoudou",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
  },
  {
    id: 40,
    color: "psy",
    name: "Grodoudou",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png",
  },
  {
    id: 41,
    color: "poison-vol",
    name: "Nosferapti",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png",
  },
  {
    id: 42,
    color: "poison-vol",
    name: "Nosferalto",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png",
  },
  {
    id: 43,
    color: "plante-poison",
    name: "Mystherbe",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
  },
  {
    id: 44,
    color: "plante-poison",
    name: "Ortide",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png",
  },
  {
    id: 45,
    color: "plante-poison",
    name: "Rafflesia",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png",
  },
  {
    id: 46,
    color: "insecte-plante",
    name: "Paras",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png",
  },
  {
    id: 47,
    color: "insecte-plante",
    name: "Parasect",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png",
  },
  {
    id: 48,
    color: "insecte-poison",
    name: "Mimitos",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png",
  },
  {
    id: 49,
    color: "insecte-poison",
    name: "Aéromite",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png",
  },
  {
    id: 50,
    color: "sol",
    name: "Taupiqueur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png",
  },
  {
    id: 51,
    color: "sol",
    name: "Triopikeur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png",
  },
  {
    id: 52,
    color: "normal",
    name: "Miaouss",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
  },
  {
    id: 53,
    color: "normal",
    name: "Persian",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png",
  },
  {
    id: 54,
    color: "eau",
    name: "Psykokwak",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
  },
  {
    id: 55,
    color: "eau",
    name: "Akwakwak",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png",
  },
  {
    id: 56,
    color: "combat",
    name: "Férosinge",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png",
  },
  {
    id: 57,
    color: "combat",
    name: "Colossinge",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png",
  },
  {
    id: 58,
    color: "feu",
    name: "Caninos",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
  },
  {
    id: 59,
    color: "feu",
    name: "Arcanin",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png",
  },
  {
    id: 60,
    color: "eau",
    name: "Ptitard",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png",
  },
  {
    id: 61,
    color: "eau",
    name: "Têtarte",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png",
  },
  {
    id: 62,
    color: "eau-combat",
    name: "Tartard",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png",
  },
  {
    id: 63,
    color: "psy",
    name: "Abra",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png",
  },
  {
    id: 64,
    color: "psy",
    name: "Kadabra",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png",
  },
  {
    id: 65,
    color: "psy",
    name: "Alakazam",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
  },
  {
    id: 66,
    color: "combat",
    name: "Machoc",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png",
  },
  {
    id: 67,
    color: "combat",
    name: "Machopeur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png",
  },
  {
    id: 68,
    color: "combat",
    name: "Mackogneur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png",
  },
  {
    id: 69,
    color: "plante-poison",
    name: "Chétiflor",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png",
  },
  {
    id: 70,
    color: "plante-poison",
    name: "Boustiflor",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png",
  },
  {
    id: 71,
    color: "plante-poison",
    name: "Empliflor",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png",
  },
  {
    id: 72,
    color: "eau-poison",
    name: "Tentacool",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png",
  },
  {
    id: 73,
    color: "eau-poison",
    name: "Tentacruel",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png",
  },
  {
    id: 74,
    color: "sol-roche",
    name: "Racaillou",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
  },
  {
    id: 75,
    color: "sol-roche",
    name: "Gravalanch",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png",
  },
  {
    id: 76,
    color: "sol-roche",
    name: "Grolem",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png",
  },
  {
    id: 77,
    color: "feu",
    name: "Ponyta",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png",
  },
  {
    id: 78,
    color: "feu",
    name: "Galopa",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png",
  },
  {
    id: 79,
    color: "eau-psy",
    name: "Ramoloss",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png",
  },
  {
    id: 80,
    color: "eau-psy",
    name: "Flagadoss",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png",
  },
  {
    id: 81,
    color: "electrique-acier",
    name: "Magnéti",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png",
  },
  {
    id: 82,
    color: "electrique-acier",
    name: "Magnéton",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png",
  },
  {
    id: 83,
    color: "normal-vol",
    name: "Canarticho",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png",
  },
  {
    id: 84,
    color: "normal-vol",
    name: "Doduo",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png",
  },
  {
    id: 85,
    color: "normal-vol",
    name: "Dodrio",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png",
  },
  {
    id: 86,
    color: "eau",
    name: "Otaria",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png",
  },
  {
    id: 87,
    color: "eau-glace",
    name: "Lamantine",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png",
  },
  {
    id: 88,
    color: "poison",
    name: "Tadmorv",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png",
  },
  {
    id: 89,
    color: "poison",
    name: "Grotadmorv",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png",
  },
  {
    id: 90,
    color: "eau",
    name: "Kokiyas",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png",
  },
  {
    id: 91,
    color: "eau-glace",
    name: "Crustabri",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png",
  },
  {
    id: 92,
    color: "spectre-poison",
    name: "Fantominus",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png",
  },
  {
    id: 93,
    color: "spectre-poison",
    name: "Spectrum",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png",
  },
  {
    id: 94,
    color: "spectre-poison",
    name: "Ectoplasma",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
  },
  {
    id: 95,
    color: "sol-roche",
    name: "Onix",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png",
  },
  {
    id: 96,
    color: "psy",
    name: "Soporifik",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png",
  },
  {
    id: 97,
    color: "psy",
    name: "Hypnomade",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
  },
  {
    id: 98,
    color: "eau",
    name: "Krabby",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png",
  },
  {
    id: 99,
    color: "eau",
    name: "Krabboss",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png",
  },
  {
    id: 100,
    color: "electrique",
    name: "Voltorbe",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png",
  },
  {
    id: 101,
    color: "electrique",
    name: "Électrode",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png",
  },
  {
    id: 102,
    color: "plante-psy",
    name: "Noeunoeuf",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png",
  },
  {
    id: 103,
    color: "plante-psy",
    name: "Noadkoko",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png",
  },
  {
    id: 104,
    color: "sol",
    name: "Osselait",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png",
  },
  {
    id: 105,
    color: "sol",
    name: "Ossatueur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png",
  },
  {
    id: 106,
    color: "combat",
    name: "Kicklee",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png",
  },
  {
    id: 107,
    color: "combat",
    name: "Tygnon",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png",
  },
  {
    id: 108,
    color: "normal",
    name: "Excelangue",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png",
  },
  {
    id: 109,
    color: "poison",
    name: "Smogo",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png",
  },
  {
    id: 110,
    color: "poison",
    name: "Smogogo",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png",
  },
  {
    id: 111,
    color: "sol-roche",
    name: "Rhinocorne",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png",
  },
  {
    id: 112,
    color: "sol-roche",
    name: "Rhinoféros",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png",
  },
  {
    id: 113,
    color: "normal",
    name: "Leveinard",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png",
  },
  {
    id: 114,
    color: "plante",
    name: "Saquedeneu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png",
  },
  {
    id: 115,
    color: "normal",
    name: "Kangourex",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png",
  },
  {
    id: 116,
    color: "eau",
    name: "Hypotrempe",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png",
  },
  {
    id: 117,
    color: "eau",
    name: "Hypocéan",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png",
  },
  {
    id: 118,
    color: "eau",
    name: "Poissirène",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png",
  },
  {
    id: 119,
    color: "eau",
    name: "Poissoroy",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png",
  },
  {
    id: 120,
    color: "eau",
    name: "Stari",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png",
  },
  {
    id: 121,
    color: "eau-psy",
    name: "Staross",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png",
  },
  {
    id: 122,
    color: "psy-fee",
    name: "M.Mime",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png",
  },
  {
    id: 123,
    color: "insecte-vol",
    name: "Insécateur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png",
  },
  {
    id: 124,
    color: "eau-psy",
    name: "Lippoutou",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png",
  },
  {
    id: 125,
    color: "electrique",
    name: "Elektek",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png",
  },
  {
    id: 126,
    color: "feu",
    name: "Magmar",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png",
  },
  {
    id: 127,
    color: "insecte",
    name: "Scarabrute",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png",
  },
  {
    id: 128,
    color: "normal",
    name: "Tauros",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png",
  },
  {
    id: 129,
    color: "eau",
    name: "Magicarpe",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
  },
  {
    id: 130,
    color: "eau-vol",
    name: "Léviator",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png",
  },
  {
    id: 131,
    color: "eau-glace",
    name: "Lokhlass",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png",
  },
  {
    id: 132,
    color: "normal",
    name: "Métamorph",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
  },
  {
    id: 133,
    color: "normal",
    name: "Evoli",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
  },
  {
    id: 134,
    color: "eau",
    name: "Aquali",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png",
  },
  {
    id: 135,
    color: "electrique",
    name: "Voltali",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
  },
  {
    id: 136,
    color: "feu",
    name: "Pyroli",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png",
  },
  {
    id: 137,
    color: "normal",
    name: "Porygon",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png",
  },
  {
    id: 138,
    color: "roche-eau",
    name: "Amonita",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png",
  },
  {
    id: 139,
    color: "roche-eau",
    name: "Amonistar",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png",
  },
  {
    id: 140,
    color: "roche-eau",
    name: "Kabuto",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png",
  },
  {
    id: 141,
    color: "roche-eau",
    name: "Kabutops",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png",
  },
  {
    id: 142,
    color: "roche-vol",
    name: "Ptéra",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png",
  },
  {
    id: 143,
    color: "normal",
    name: "Ronflex",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
  },
  {
    id: 144,
    color: "glace-vol",
    name: "Artikodin",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png",
  },
  {
    id: 145,
    color: "electrique-vol",
    name: "Electhor",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png",
  },
  {
    id: 146,
    color: "feu-vol",
    name: "Sulfura",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png",
  },
  {
    id: 147,
    color: "dragon",
    name: "Minidraco",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png",
  },
  {
    id: 148,
    color: "dragon",
    name: "Draco",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png",
  },
  {
    id: 149,
    color: "dragon-vol",
    name: "Dracolosse",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
  },
  {
    id: 150,
    color: "psy",
    name: "Mewtwo",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
  },
  {
    id: 151,
    color: "psy",
    name: "Mew",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
  },
];
export default pokemonList;
