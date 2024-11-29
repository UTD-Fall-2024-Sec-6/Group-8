import { useState } from "react";
import "./signup.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formSignup, setFormSignup] = useState({
    name: "",
    username: "",
    password: "",
    rePassword: "",
  });

  const [msg, setMsg] = useState("");
  const handleInputChange = (event) => {
    const { name, value } = event.target; // Access name and value properties
    setFormSignup({
      ...formSignup,
      [name]: value, // Dynamically update the formSignin object with the input's name as the key
    });
  };

  const handlePassword = () => {
    setFormSignup({
      ...formSignup,
      password: "",
      rePassword: "",
    });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^[a-zA-Z\s]+$/.test(formSignup.name)) {
      setMsg("Name cannot contain numbers or special characters.");
      handlePassword();
    } else if (formSignup.password.length < 8) {
      setMsg("Password must be at least 8 characters long");
      handlePassword();
    } else if (formSignup.password !== formSignup.rePassword) {
      setMsg("Passwords do not match.");
      handlePassword();
    } else if (
      !/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z])/.test(formSignup.password)
    ) {
      setMsg(
        "Password must be include at least one number and one special character."
      );
      handlePassword();
    } else {
      console.log("Form data being sent:", formSignup); // Check the data here
      try {
        const response = await fetch("http://localhost:8080/api/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formSignup.name,
            username: formSignup.username,
            password: formSignup.password,
          }),
        });
        const data = await response.text();
        if (data.includes("null")) setMsg("Username already exists");
        else {
          localStorage.setItem("authToken", data);
          navigate("/dashboard"); // Redirect after successful user creation
        }
      } catch (error) {
        console.log("Error during fetch operation:", error);
        alert("An unexpected error occurred.");
      }
    }
  };
  return (
    <div
      className="container"
      style={{ backgroundImage: `url("images/8.png")` }}
    >
      <div className="center-formSignUp">
        <Form onSubmit={handleSubmit}>
          <h1 className="goalgrid-header">GoalGrid</h1>

          <img
            className="icon"
            src="favicon.ico"
            alt=""
            width="50"
            height="50"
          />
          <h1 style={{ marginTop: "0px", fontFamily: "Laila" }}>Sign Up</h1>

          <Form.Group controlId="formGroupName">
            <Form.Control
              type="text"
              name="name"
              placeholder="Name"
              value={formSignup.name}
              required={true}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formGroupUsername">
            <Form.Control
              type="text"
              name="username"
              placeholder="Username"
              required={true}
              value={formSignup.username}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formGroupPassword">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required={true}
              value={formSignup.password}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formGroupRePassword">
            <Form.Control
              type="password"
              name="rePassword"
              placeholder="Re-Password"
              required={true}
              value={formSignup.rePassword}
              onChange={handleInputChange}
            />
          </Form.Group>
          <div style={{ color: "red", marginTop: "10px" }}>{msg}</div>
          <Button variant="primary" type="submit" className="w-100">
            Submit
          </Button>
          <div className="signin-link-container">
            <p>Already have an account?</p>
            <Link to="/signin">
              <p className="bold-link">Sign In</p>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
