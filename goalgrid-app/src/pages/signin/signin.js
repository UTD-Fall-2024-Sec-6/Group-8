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
      className="signin-container"
      style={{ backgroundImage: `url("images/10.png")` }}
    >
      <div className="center-formSignin">
        <Form onSubmit={handleSubmit}>
          <h1 className="signin-header">GoalGrid</h1>
          <img
            className="signin-icon"
            src="favicon.ico"
            alt="Icon"
            width="50"
            height="50"
          />
          <h1 className="signin-title">Welcome Back!</h1>
          <Form.Group controlId="formGroupUsername">
            <Form.Control
              type="text"
              name="username"
              placeholder="Username"
              required
              value={formSignin.username}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formSignin.password}
              onChange={handleInputChange}
            />
          </Form.Group>
          <div className="signin-error">{msg}</div>
          <Button variant="primary" type="submit" className="w-100a">
            Sign In
          </Button>
          <div className="signin-footer">
            <p>Don't have an account?</p>
            <Link to="/signup" className="signin-link">
              Sign Up
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Signin;
