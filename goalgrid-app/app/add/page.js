'use client';

import { useEffect, useState } from "react";
import { Goal } from './goal.js';

export default function AddGoals() {
  const [description, setDescription] = useState("");
  const [complete, toggleComplete] = useState(0);

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
  
  useEffect( () => { 
    if(typeof window !== 'undefined') { 
      localStorage.setItem("list", JSON.stringify(list))
    }
    console.log(list);
  }, [list])

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
    const index = list.indexOf(list.find((element) => element.goalID == id));

    
    if (list[index].isCompleted === false) {
      list[index].isCompleted = true;
      toggleComplete(complete + 1);
      document.getElementById("complete" + id).style["background-color"] = "rgb(20,200,20)";
    } else {
      list[index].isCompleted = false;
      toggleComplete(complete + 1);
      document.getElementById("complete" + id).style["background-color"] = "azure";
      //setList(list);
    }
    
  }

  return(
    <div>
      <h1>Add Goals</h1>

      <input 
        placeholder="Type Goal Description Here"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <button onClick={() => addGoal(description)}>Add</button>
      <button onClick={() => clearList()}>Clear List</button>

      <p>Existing Goals List</p>

      <ul>
        {
          list.map( (aGoal) => {
            return (
            <li key={aGoal.goalID}>
              <div>{aGoal.desc}</div>
              <button id={"complete" + aGoal.goalID} onClick={() => completeGoal(aGoal.goalID)}>Check</button>
            </li> 
            )
          })
        }
      </ul>

    </div>
  );
}