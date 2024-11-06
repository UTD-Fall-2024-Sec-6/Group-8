'use client';

import { useEffect, useState } from "react";
import { Goal } from './goal.js';

export default function AddGoals() {
  const [description, setDescription] = useState("");

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
  }, [list])

  const addGoal = (desc) => {
    let goal = new Goal(1, desc, false);
    setList([...list, goal]);

    setDescription("");
  }

  const clearList = () => {
    setList([]);
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
            return (<div>{aGoal.desc}</div>)
          })
        }
      </ul>

    </div>
  );
}