function fullDeck() {
  const suits = ["Wands", "Cups", "Swords", "Pentacles"];
  const values = ["King", "Queen", "Knight", "Page", "Ten", "Nine", "Eight", "Seven",
    "Six", "Five", "Four", "Three", "Two", "Ace"
  ];
  const deck = [];
  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      const suit = suits[s];
      const value = values[v];
      deck.push({
        value,
        suit
      });
    }
  }
  deck.push("The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant",
    "The Lovers", "The Chariot", "Strength", "The Hermit", "Wheel of Fortune", "Justice", "The Hanged Man",
    "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "The Last Judgement",
    "The World", "The Fool");
  return deck;
}
const cards = fullDeck();

function randomCard(cards) {
  const random = Math.floor(Math.random() * cards.length);
  const cardValue = cards[random];
  cards.splice(random, 1);
  return cardValue;
}

randomCard(cards);