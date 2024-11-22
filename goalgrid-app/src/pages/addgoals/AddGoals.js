import { useEffect, useState } from "react";
import { Goal } from "../goal.js";
import styles from "./addgoals.css";
import { IoIosCheckmark } from "react-icons/io";
import GoalComponent from "../../components/goalcomponent.js";
//import GoalComponent from "../components/goalcomponent.js";
import { Link } from "react-router-dom";

export default function AddGoals() {
  const [description, setDescription] = useState(""); //This state is used to retrieve the user input in "Create/Add Goals" page.
  const [complete, toggleComplete] = useState(0); //This state is used to detect a change to a goal's completion state. See the "useEffect" React hook below

  //"List" is an array storing all the goals, as of now the goals are stored in localStorage (website memory)
  const [list, setList] = useState(() => {
    if (typeof window !== "undefined") {
      let localValue = localStorage.getItem("list"); //"list" is the name of the item storing the "goals"
      if (localValue == null)
        return []; //Scenario where user clears goals before exiting
      else {
        localValue = JSON.parse(localValue);
        localValue = localValue.map(
          (aGoal) => new Goal(aGoal.goalID, aGoal.desc, aGoal.isCompleted)
        );
      }

      return localValue;
    } else {
      //Handles localStorage not defined (Scenario when first time app use)
      return [];
    }
  });

  //A React hook that: Detects changes in "list" state (whenever user adds a goal) and stores the "list" in local memory
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("list", JSON.stringify(list));
    }
    console.log(list);
  }, [list]);

  //A React hook that: Detects changes in "complete" state and updates the "list" array after goal is set true/false
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("list", JSON.stringify(list));
      console.log(list);
    }
  }, [complete]);

  const addGoal = (desc) => {
    let ID = JSON.parse(localStorage.getItem("list"));
    let length = ID.length;

    console.log(length);
    if (length > 4) {
      console.log("List full.");
      return;
    }

    let goal = new Goal(length, desc, false);

    setList([...list, goal]);
    setDescription("");
  };

  const clearList = () => {
    setList([]);
  };

  const completeGoal = (id) => {
    const index = list.indexOf(
      list.find((element) => element.getGoalID() == id)
    );

    if (list[index].isCompleted === false) {
      //list[index].isCompleted = true;
      document.getElementById("complete" + id).style["background-color"] =
        "#ECA400";
    } else {
      //list[index].isCompleted = false;
      document.getElementById("complete" + id).style["background-color"] =
        "azure";
    }

    toggleComplete(complete + 1); //this lets React know
    list[index].markComplete(); //<-- The functions don't work on the Goals in the List once the page reloads. BUG,
  };

  return (
    <div
      style={{
        /*width: '1080px',
      height: '1920px',*/
        display: "flex",
        flexDirection: "row",
        /*height: '100vh',*/
        minHeight: "100vh",
        height: "auto",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("images/8.png")`,
      }}
    >
      <div
        style={{
          width: "15%",
          placeContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Link to="/grid">
          <button className="MenuButton">Grid</button>
        </Link>
      </div>
      <div style={{ flex: "1" }} className="addgoals-content">
        <h1 className="addgoal-title">Goals</h1>

        <input
          className="addgoal-input"
          placeholder="Type Goal Description Here"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div>
          <button
            className="addgoal-addbutton"
            onClick={() => addGoal(description)}
          >
            Add Goal
          </button>
          <button className="addgoal-clearbutton" onClick={() => clearList()}>
            Clear List
          </button>
        </div>

        {/* 
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
        */}
        {list.map((aGoal) => {
          return <GoalComponent aGoal={aGoal} completeGoal={completeGoal} />;
        })}
      </div>
      <div style={{ width: "15%" }}></div>
    </div>
  );
}
