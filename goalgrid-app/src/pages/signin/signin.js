import { useState } from "react";
import "./signin.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [formSignin, setFormSignin] = useState({
    username: "",
    password: "",
  });

  const [msg, setMsg] = useState("");
  const handleInputChange = (event) => {
    const { name, value } = event.target; // Access name and value properties
    setFormSignin({
      ...formSignin,
      [name]: value, // Dynamically update the formSignin object with the input's name as the key
    });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formSignin.username,
          password: formSignin.password,
        }),
      });
      const data = await response.text();
      if (data === "") {
        setMsg("Incorrect username or password.");
        setFormSignin({
          ...formSignin,
          password: "",
        });
      } else {
        localStorage.setItem("authToken", data);
        navigate("/dashboard"); // Redirect after successful user creation
      }
    } catch (error) {
      console.log("Error during fetch operation:", error);
      alert("An unexpected error occurred.");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Centers content horizontally
        justifyContent: "center", // Centers content vertically
        minHeight: "100vh", // Ensures the div fills the screen height
        width: "100vw",
        backgroundImage: `url("images/purple.webp")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="center-formSignin">
        <Form onSubmit={handleSubmit}>
          <h1
            style={{
              display: "flex",
              fontSize: "18px",
              position: "absolute",
              top: "20px",
              left: "20px",
              margin: 0,
              color: "white",
            }}
          >
            GoalGrid
          </h1>
          <img
            style={{ marginTop: "20px" }}
            className="icon"
            src="favicon.ico"
            alt=""
            width="50"
            height="50"
          />
          <h1 style={{ marginTop: "0px" }}>Sign in</h1>
          <Form.Group controlId="formGroupUsername">
            <Form.Control
              type="text"
              name="username"
              placeholder="Username"
              required={true}
              value={formSignin.username}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formGroupPassword">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required={true}
              value={formSignin.password}
              onChange={handleInputChange}
            />
          </Form.Group>

          <div style={{ color: "darkred", marginBottom: "10px" }}>{msg}</div>

          <Button
            style={{
              border: "none",
              padding: "10px",
              color: "white",
              textAlign: "center",
              display: "inline-block",
              transition: "background-color 0.4s, color 0.4s",
              cursor: "pointer",
              width: "55%",
            }}
            variant="primary"
            type="submit"
            className="w-100a"
          >
            Submit
          </Button>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ marginTop: 20, margin: 0 }}>Don't have an account?</p>
            <Link to="/signup">
              <p
                style={{
                  marginTop: 20,
                  margin: 3,
                  fontWeight: "bold",
                  color: "#6c5ce7",
                }}
              >
                Sign Up
              </p>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Signin;
