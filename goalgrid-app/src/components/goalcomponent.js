import { IoIosCheckmark } from "react-icons/io";
import styles from "../pages/addgoals/AddGoals.js";
import { Goal } from '../pages/goal.js';

export default function GoalComponent({ aGoal , completeGoal}) {
  if (aGoal.desc.length > 25) {
    window.alert("Goal description must be less than 25 characters");
    aGoal.desc = aGoal.desc.slice(0, 25);
  }

  return (
    <>
      <div className="addgoal-listitem">
        <button className={aGoal.isCompleted.toString()} id={"complete" + aGoal.getGoalID()} onClick={() => completeGoal(aGoal.getGoalID())}><IoIosCheckmark size={20}/></button>
        <div data-testid="description">{aGoal.desc}</div>

      </div>
    </>
  );
}