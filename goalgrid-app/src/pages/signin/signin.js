import { useState } from "react";
import "./signin.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";

const Signin = () =>{

    const[formSignin, setFormSignin] = useState({
        username: "",
        password: "",
    })

    const[msg, setMsg] = useState("")
    const handleInputChange = (event) => {
        const { name, value } = event.target; // Access name and value properties
        setFormSignin({
            ...formSignin,
            [name]: value, // Dynamically update the formSignin object with the input's name as the key
        });
    };

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/api/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: formSignin.username,
                    password: formSignin.password
                })
            });
                const data = await response.text();
                if(data===''){
                    setMsg("Incorrect username or password.")
                    setFormSignin({
                        ...formSignin,
                        password: ""
                    });
                }else{
                    localStorage.setItem("authToken",data)
                    navigate("/dashboard");  // Redirect after successful user creation
                }
        }catch (error) {
            console.log("Error during fetch operation:", error);
            alert("An unexpected error occurred.");
        } 
    }
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            minHeight: '100vh',
            height: 'auto',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url("images/8.png")`,
          }}>

            
            <div className="center-formSignin">
                <Form onSubmit={handleSubmit}>
                <h1 style={{fontSize: '50px' }}>GoalGrid</h1>
                <h1>Signin</h1>
                <img className="icon" src="favicon.ico" alt="" width="70" height="70"/>  

                    <Form.Group controlId = "formGroupUsername">
                        <Form.Label>Username: </Form.Label>
                        <Form.Control
                            type = "text"
                            name = "username"
                            placeholder ="Username"
                            required = {true}
                            value={formSignin.username}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId = "formGroupPassword">
                        <Form.Label>Password: </Form.Label>
                        <Form.Control
                            type = "password"
                            name = "password"
                            placeholder ="Password"
                            required = {true}
                            value={formSignin.password}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <div style={{color: 'red', marginBottom:'10px'}}>{msg}</div>
                    
                    <Button variant="primary" type="submit" className="w-100" style={{marginBottom:'10px'}}>Submit</Button> 
                    
                    <div> 
                        <Link to="/signup">
                            <Button>Register Account</Button>
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Signin