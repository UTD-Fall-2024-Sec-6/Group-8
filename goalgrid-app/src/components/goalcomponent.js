import { IoIosCheckmark } from "react-icons/io";
import styles from "../pages/addgoals.css";
import { Goal } from '../pages/goal.js';

export default function GoalComponent({ aGoal , completeGoal}) {

  return (
    <>
      <div className="addgoal-listitem">
      
        <button className={aGoal.isCompleted.toString()} id={"complete" + aGoal.getGoalID()} onClick={() => completeGoal(aGoal.getGoalID())}><IoIosCheckmark size={20}/></button>
        <div data-testid="description">{aGoal.desc}</div>

      </div>
    </>
  );
}