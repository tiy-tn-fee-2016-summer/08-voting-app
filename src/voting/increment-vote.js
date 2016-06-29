export default function addOption(existingPoll, optionIndex) {
  const collector = [];
  let newObject={};

  for (let i = 0; i < existingPoll.length; i++) {
    collector.push(existingPoll[i]);
  }

newObject=collector.push(existingPoll[optionIndex].votes);

 collector.push(newObject);
 return newObject;



}
