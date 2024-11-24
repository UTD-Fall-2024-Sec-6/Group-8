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
        setIsAuthenticated(response.ok);
      })
      .catch(() => setIsAuthenticated(false));
  }, [authToken]);
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }
  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }
  return children;
};

export default PrivateRoute;
