export default function selectAction(cardA, cardB) {

if(cardA === cardB){
  return 'split';
}
else if (cardB =='7') {
  return 'stay';

}
else if (cardB == 'jack') {
  return 'stay';

}
return 'hit';

}
