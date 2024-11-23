import { useEffect, useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./sidemenu.css";
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
      <h1 style={{ color: "#5C3D27" }} className="GoalGrid-Title">
        GoalGrid
      </h1>

      <div style={{ fontSize: "30px", marginTop: "150px", color: "#5C3D27" }}>
        Hello {name}
      </div>
      <div>
        {" "}
        <button style={{ marginTop: "200px" }} className="SettingsButton">
          <BsPersonFill size={42} />{" "}
        </button>{" "}
      </div>
      <button
        style={{ marginTop: "30px" }}
        onClick={signoutHandle}
        className="MenuButton"
      >
        Sign out
      </button>
    </div>
  );
}
