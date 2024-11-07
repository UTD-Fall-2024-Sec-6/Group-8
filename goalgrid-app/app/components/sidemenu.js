import { BsPersonFill } from "react-icons/bs";
import Link from 'next/link';

export default function SideMenu() {
  return (
    <div className="SideMenu">
      <div> <h1>GoalGrid</h1> </div>
      <div> <Link href="/add"> <button className="MenuButton">Add Goals</button> </Link> </div>
      <div> <Link href="/"> <button className="MenuButton">Generate New Grid</button> </Link></div>
      <div> <button className="SettingsButton"><BsPersonFill size={42}/> </button> </div>
    </div>
  );
}