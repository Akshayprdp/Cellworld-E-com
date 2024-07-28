import React from 'react'
import {Navigate} from "react-router-dom";

function AdminProtectRoute({ element }) {

    const token = localStorage.getItem("adminJWT");

    if (token) {
        return element;
      } else {
       return <Navigate to={"/admin"} />;
      }

}

export default AdminProtectRoute
