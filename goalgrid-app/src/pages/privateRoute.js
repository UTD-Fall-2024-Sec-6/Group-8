import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null means pending
  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    if (!authToken) {
      setIsAuthenticated(false);
      return;
    }

    fetch("http://localhost:8080/api/dashboard", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => {
        setIsAuthenticated(response.ok); // Set true if response is OK
      })
      .catch(() => setIsAuthenticated(false)); // Handle errors by marking as not authenticated
  }, [authToken]);

  if (isAuthenticated === null) {
    // While waiting for the fetch to complete, you can return a loader or nothing
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    // Redirect to sign-in if not authenticated
    return <Navigate to="/signin" />;
  }

  // Render children if authenticated
  return children;
};

export default PrivateRoute;
