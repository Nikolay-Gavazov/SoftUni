function playingCards(face, suit) {
  const cardFaces = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "D",
    "K",
    "A",
  ];

  const cardSuits = {
    S: "\u2660",
    H: "\u2665",
    D: "\u2666",
    C: "\u2663",
  };

  if (!cardFaces.includes(face)) {
    throw Error("invalid face");
  } else if (!cardSuits.hasOwnProperty(suit)) {
    throw Error("invalid suit");
  }

  return `${face}${cardSuits[suit]}`;
}
playingCards("A", "");
