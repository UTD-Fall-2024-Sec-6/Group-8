import { useEffect, useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

export default function SideMenu() {
  const [name, setName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/dashboard", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
        setName(data);
      } catch (error) {
        console.error("Error during fetch operation:", error);
        alert("An unexpected error occurred.");
      }
    };
    fetchData();
  }, []);
  const navigate = useNavigate();
  const signoutHandle = () => {
    localStorage.removeItem("authToken");
    navigate("/signin");
  };
  return (
    <div className="SideMenu">
      <h1 className="GoalGrid-Title">GoalGrid</h1>
      <div>Hello {name}</div>
      <div>
        <Link to="/add">
          <button className="MenuButton">Add Goals</button>
        </Link>
      </div>
      <div>
        <button className="MenuButton">
          <Link to="/grid" />
          Generate New Grid
        </button>
      </div>
      <div>
        {" "}
        <button className="SettingsButton">
          <BsPersonFill size={42} />{" "}
        </button>{" "}
      </div>
      <button onClick={signoutHandle} className="MenuButton">
        Sign out
      </button>
    </div>
  );
}
