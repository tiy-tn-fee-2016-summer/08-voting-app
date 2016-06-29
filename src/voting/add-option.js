export default function addOption(existingPoll, optionName) {


  let newArray = [];

 let copyArray= {name: optionName, votes: 0 }
for (var i = 0; i < existingPoll.length; i++) {
  newArray.push(existingPoll[i]);
}
newArray.push(copyArray);
return newArray;

  // var newElement = {
  //   "name": "Bar",
  //   "votes": 0
  // };
  // var newElement2 = {
  //   "name": "Baz",
  //   "votes": 0
  // }
  // if (existingPoll.length < 2) {
  //   for (var i = 0; i < existingPoll.length; i++) {
  //     newArray.push(existingPoll.votes[i], newElement);
  //   }
  //   return newArray;
  // }

}
