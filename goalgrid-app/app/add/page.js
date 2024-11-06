'use client';

import { useState } from "react";
import { Goal } from './goal.js';

export default function AddGoals() {
  const [list, setList] = useState([]);
  const [description, setDescription] = useState("");
  
  const addGoal = (desc) => {
    let goal = new Goal(1, desc, false);
    setList([...list, goal]);

    setDescription("");
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