'use client'; //Next.js needs this to allow React hooks to be used on user-side.

import { useEffect, useState } from "react";
import { Goal } from './goal.js';
import styles from "./addgoals.css";
import { IoIosCheckmark } from "react-icons/io";

export default function AddGoals() {
  const [description, setDescription] = useState(""); //This state is used to retrieve the user input in "Create/Add Goals" page.
  const [complete, toggleComplete] = useState(0); //This state is used to detect a change to a goal's completion state. See the "useEffect" React hook below

  //"List" is an array storing all the goals, as of now the goals are stored in localStorage (website memory)
  const [list, setList] = useState( () => {
    if(typeof window !== 'undefined') {
      const localValue = localStorage.getItem("list"); //"list" is the name of the item storing the "goals"
      if(localValue == null) return [];

      return JSON.parse(localValue);
    }
    else { //Handles localStorage not defined
      return [];
    }
  });
  
  //A React hook that: Detects changes in "list" state (whenever user adds a goal) and stores the "list" in local memory
  useEffect( () => { 
    if(typeof window !== 'undefined') { 
      localStorage.setItem("list", JSON.stringify(list))
    }
    console.log(list);
  }, [list])

  //A React hook that: Detects changes in "complete" state and updates the "list" array after goal is set true/false
  useEffect(() => {
    if(typeof window !== 'undefined') {
      localStorage.setItem("list", JSON.stringify(list))
      console.log(list);
    }
  }, [complete])

  const addGoal = (desc) => {
    let goal = new Goal(Math.random(), desc, false);
    setList([...list, goal]);

    setDescription("");
  }

  const clearList = () => {
    setList([]);
  }

  const completeGoal = (id) => {
    const index = list.indexOf(list.find((element) => element.getGoalID() == id));
    
    if (list[index].isCompleted === false) {
      //list[index].isCompleted = true;
      document.getElementById("complete" + id).style["background-color"] = "rgb(0,255,0)";
    } else {
      //list[index].isCompleted = false;
      document.getElementById("complete" + id).style["background-color"] = "azure";
    }

    toggleComplete(complete + 1); //this lets React know
    list[index].markComplete();
  }

  return(
    <div style={{
      /*width: '1080px',
      height: '1920px',*/
      display: 'flex',
      height: '100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url("images/8.png")`,
    }}>
      <div className="addgoals-content">
        <h1 className="addgoal-title">Goals</h1>

        <input 
          className="addgoal-input"
          placeholder="Type Goal Description Here"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <div>
          <button className="addgoal-addbutton" onClick={() => addGoal(description)}>Add Goal</button>
          <button className="addgoal-clearbutton" onClick={() => clearList()}>Clear List</button>
        </div>

        <ul className="addgoal-list">
          {
            list.map( (aGoal) => {
              return (
              <li key={aGoal.getGoalID()} className="addgoal-listitem">

                <button className={aGoal.isCompleted.toString()} id={"complete" + aGoal.getGoalID()} onClick={() => completeGoal(aGoal.getGoalID())}><IoIosCheckmark size={20}/></button>
                <div>{aGoal.desc}</div>

              </li> 
              )
            })
          }
        </ul>

      </div>
      
    </div>
  );
}