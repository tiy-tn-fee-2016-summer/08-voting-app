import calculatePercent from 'voting/calculate-percent';
import totalVotes from 'voting/total-votes';
export default function percentVotes(options, index) {

  const percent = calculatePercent(options[index].votes, totalVotes(options));
  return percent;

  }
