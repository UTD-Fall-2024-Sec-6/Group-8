import { IoMdSettings } from "react-icons/io";
import Link from 'next/link';

export default function SideMenu() {
  return (
    <div className="SideMenu">
      <div> <h1>GoalGrid</h1> </div>
      <div> <Link href="/add"> <button className="MenuButton">Add Goals</button> </Link> </div>
      <div> <button className="MenuButton">Generate New Grid</button> </div>
      <div> <button className="SettingsButton"><IoMdSettings size={42}/></button> </div>
    </div>
  );
}