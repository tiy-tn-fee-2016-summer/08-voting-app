export default function cardValue(cardName) {

  if (cardName == 'ace') {
    return 11;
  }
  if (cardName == '5') {
    return 5;
  }
  if (cardName == '9') {
    return 9;
  }
  return 10;
}
