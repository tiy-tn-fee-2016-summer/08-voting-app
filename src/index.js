import addOption from 'voting/add-option';
import percentVotes from 'voting/percent-votes';
import totalVotes from 'voting/total-votes';
import incrementVote from 'voting/increment-vote';

/* global Vue */

export default function startApp(selector) {
  return new Vue({
    el: selector,
    data: {
      options: [{
        name: 'Javascript',
        votes: 2,
      }],
      newOption: '',
    },
    methods: {
      percentVotes,
      addOption(ev) {
        ev.preventDefault();
        const name = this.newOption;
        this.newOption = '';

        this.options = addOption(this.options, name);
      },
      incrementVote(options, index) {
        this.options = incrementVote(options, index);
      },
      totalVotes,
    },
  });
}
