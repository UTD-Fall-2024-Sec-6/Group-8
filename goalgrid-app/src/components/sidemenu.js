import { BsPersonFill } from "react-icons/bs";
import { Link,} from "react-router-dom";

export default function SideMenu() {
  const username = localStorage.getItem("name")
  return (
    <div className="SideMenu">
      <h1 className="GoalGrid-Title">GoalGrid</h1>
      <div>Hello {username}</div>
      <div> 
        <Link to="/add">
          <button className="MenuButton">Add Goals</button>
        </Link>
      </div>
      <div> 
        
          <button className="MenuButton"> 
            <Link to="/grid"/>
            Generate New Grid
          </button> 
      </div>
      <div> <button className="SettingsButton"><BsPersonFill size={42}/> </button> </div>
    </div>
  );
}