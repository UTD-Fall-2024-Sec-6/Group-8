import { BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function SideMenu() {
  return (
    <div className="SideMenu">
      <div> <h1>GoalGrid</h1> </div>
      <div> 
          <a href="/add">
          <button className="MenuButton">
            
            Add Goals
          </button> 
          </a>
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