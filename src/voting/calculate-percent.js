export default function calculatePercent(numerator, denominator) {

  var x = (numerator / denominator) * 100;
  return Math.round(x) + '%';
}
