import styles from "./styles.css";
import { IoMdSettings } from "react-icons/io";
//https://react-icons.github.io/react-icons/search/#q=settings
//npm install react-icons
//https://stackoverflow.com/questions/43768629/how-to-scale-large-font-awesome-icons-from-the-react-icons-package

export default function Home() {
  return (
    <>
      <div className="GoalGridAppLayout">

        <div className="SideMenu">
          <div> <h1>GoalGrid</h1> </div>
          <div> <button className="MenuButton">Edit/Add Goals</button> </div>
          <div> <button className="MenuButton">Generate New Grid</button> </div>
          <div> <button className="SettingsButton"><IoMdSettings size={42}/></button> </div>
        </div>

        <div className="Grid"></div>

      </div>
      
    </>
  );
}
