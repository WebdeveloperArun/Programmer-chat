import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Login from "./components/Authentication/Login.jsx";
import Signup from "./components/Authentication/Signup.jsx";
import PrivateRoute from "./components/Authentication/PrivateRoute.jsx";

createRoot(document.getElementById("root")).render(
 <StrictMode>
  <BrowserRouter>
   <Routes>
    {/* Public Routes */}
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />

    {/* Protected Routes */}
    <Route
     path="/servers/:serverId/channels/:channelId/*"
     element={
      // <PrivateRoute>
       <App />
      // </PrivateRoute>  
     }
    />
    <Route
     path="/*"
     element={
      // <PrivateRoute>
       <App />
      // </PrivateRoute>
     }
    />
   </Routes>
  </BrowserRouter>
 </StrictMode>
);
