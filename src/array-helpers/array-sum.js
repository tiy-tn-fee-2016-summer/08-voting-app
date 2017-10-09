export default function arraySum(a, b) {
var result = 0;
for (var i = 0; i < a.length; i++) {
  result = a[i] + result;
}
return result;

}
