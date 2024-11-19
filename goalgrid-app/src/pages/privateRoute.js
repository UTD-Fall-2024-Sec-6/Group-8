import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) =>{
    const authToken = localStorage.getItem("authToken")
    // if(authToken===null)
    //     return <Navigate to ="/signin"></Navigate>
    // fetch('http://localhost:8080/api/dashboard', {
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${authToken}`
    //       }
    // }).then((response) => {
    //     if (response.ok)
    //         console.log("check")
    //         return children
    // })
    // return <Navigate to ="/signin"></Navigate>
    return authToken? children : <Navigate to ="/signin"></Navigate>
}

export default PrivateRoute