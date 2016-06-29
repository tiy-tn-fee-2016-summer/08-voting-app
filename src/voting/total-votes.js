export default function totalVotes(options) {
  var result = 0;
  for (var i = 0; i < options.length; i++) {
    result = options[i].votes + result;
  }
  return result;
}
