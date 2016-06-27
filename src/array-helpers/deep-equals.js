export default function deepEquals(a, b) {

  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  if (a.length === b.length) {
    return true;
  }
  return false;
}
