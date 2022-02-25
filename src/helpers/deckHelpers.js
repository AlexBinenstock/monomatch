export const newDeck = () => {
  let deck = [];
  let iconCount = 57;
  let magicNums = [0, 1, 3, 13, 32, 36, 43, 52];
  let uniqueModifier = Math.floor(Math.random() * 1000);
  // create empty deck of cards
  for (let i = 0; i < iconCount; i++) {
    deck.push({ icons: [], cardId: i });
  }

  for (let currentIcon = 0; currentIcon < iconCount; currentIcon++) {
    for (let j = 0; j < iconCount; j++) {
      if (magicNums.includes(j)) {
        let cardToStamp = j + currentIcon;
        if (cardToStamp >= iconCount) {
          cardToStamp %= 57;
        }
        deck[cardToStamp].icons.push({ icon: currentIcon + uniqueModifier, symbol: Symbol(), cardId: cardToStamp });
      }
    }
  }

  deck.map((card) => {
    // jumble the icons
    card.icons = shuffle(card.icons);
    return card;
  });
  // jumble the deck.
  deck.length = 5;
  return shuffle(deck);
};

export const shuffle = (deck) => {
  let currentIndex = deck.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [deck[currentIndex], deck[randomIndex]] = [
      deck[randomIndex], deck[currentIndex]];
  }

  return deck;
}
