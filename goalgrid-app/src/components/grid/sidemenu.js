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

  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
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

      <div style={{ fontSize: "35px", color: "#FFFFFF", fontFamily: "Laila", padding: "10px",backgroundColor: "#998650", borderRadius: '5px', boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)"}}>
        Hello, {name}!
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginRight: '5%' }}>
      <button className="ProfileButton" onClick={toggleMenu}>
        <BsPersonFill size={42} color="FDA230" />
      </button>

      {menuVisible && (
          <button className="SignOutButton"
            style={{
              marginTop: '10px',
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#FDA230',
              color: 'white',
              border: '2px solid #FFFFFF',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={signoutHandle}
          >
            Sign out
          </button>
      )}
    </div>
      
    </div>
  );
}
