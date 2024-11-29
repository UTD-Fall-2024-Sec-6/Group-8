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
    <div className="SideMenu" style ={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>

      <div> 
        <h1
            style={{
              display: "flex",
            fontSize: "30px",
              position: "absolute",
              top: "20px",
              left: "20px",
              margin: 0,
              color: "#000000",
            }}
          >
            GoalGrid
          </h1>
      </div>

      <div style={{ fontSize: "35px", color: "#000000", fontFamily: "Laila"}}>
        Hello, {name}!
      </div>


      <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginRight: "5%" }}>
        <div>
        {" "}
        <button className="SettingsButton">
          <BsPersonFill size={42} color="FDA230" />{" "}
        </button>{" "}
        </div>

        <button
          style={{ marginTop: "20px" }}
          onClick={signoutHandle}
          className="SignOutButton"
        >
          Sign out
        </button>
      </div>
      
    </div>
  );
}
