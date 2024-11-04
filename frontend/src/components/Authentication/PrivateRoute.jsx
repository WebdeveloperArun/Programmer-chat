import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
 const isAuthenticated = !!localStorage.getItem("token"); // Example using localStorage
 console.log(isAuthenticated);
 

 return isAuthenticated ? children : <Navigate to="/login" />;
}
