import { useEffect, useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./header.css";
export default function Header() {
  const [name, setName] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

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
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const closeDropdown = () => {
    setDropdownVisible(false);
  };
  return (
    <div className="Header">
      <h1>GoalGrid</h1>
      <div className="GreetingText">Hello, {name}!</div>
      <div style={{ position: "relative" }}>
        <button className="SettingsButton" onClick={toggleDropdown}>
          <BsPersonFill size={30} color="#FDA230" />
        </button>
        {dropdownVisible && (
          <div className="DropdownMenu">
            <button
              className="SignOutButton"
              onClick={() => {
                signoutHandle();
                closeDropdown();
              }}
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
