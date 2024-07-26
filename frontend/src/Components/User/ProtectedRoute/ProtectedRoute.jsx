import React from "react";
import {Navigate} from "react-router-dom";

function ProtectedRoute({ element }) {

  const token = localStorage.getItem("jwt");

  if (token) {
    return element;
  } else {
   return <Navigate to={"/login"} />;
  }
}

export default ProtectedRoute;
