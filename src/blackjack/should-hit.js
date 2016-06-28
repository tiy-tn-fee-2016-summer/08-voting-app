import cardValue from 'blackjack/card-value';
export default function shouldHit(a, b) {
  if (cardValue(a) + cardValue(b) < 17) {
    return true;
  }
  return false;

}
