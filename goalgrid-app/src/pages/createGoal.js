import { Goal } from './goal.js';

export default function createGoal(desc) {
  if (desc == "") {
    desc = "Empty Goal";
  }
  let goal = new Goal(Math.random(), desc, false);
  return goal;
}

//module.exports = createGoal;