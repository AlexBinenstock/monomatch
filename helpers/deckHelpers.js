export const createDeck = () => {
  let cards = [];
  let iconCount = 57;
  let secretNums = [0, 1, 3, 13, 32, 36, 43, 52];

  // create empty deck of cards
  for (let i = 0; i < iconCount; i++) {
    cards.push([]);
  }

  for (let currentIcon = 0; currentIcon < iconCount; currentIcon++) {
    for (let j = 0; j < iconCount; j++) {
      if (secretNums.includes(j)) {
        let cardToStamp = j + currentIcon;
        if (cardToStamp >= iconCount) {
          cardToStamp %= 57;
        }
        cards[cardToStamp].push(currentIcon + " ");
      }
    }
  }
  return cards;
};
