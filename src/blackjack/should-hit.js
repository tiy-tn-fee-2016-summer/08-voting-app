import cardValue from 'blackjack/card-value';
export default function shouldHit(cardA, cardB) {
  if (cardValue(cardA) + cardValue(cardB) < 17) {
    return true;
  }
  return false;

}
