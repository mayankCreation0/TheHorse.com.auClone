import React from "react";
import { AuthContext } from "../API/Context";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const Privateroute = ({ children }) => {
    const { isAuth } = useContext(AuthContext);
    if (!isAuth.loggedin) {
        return <Navigate to="/account/login" />
    }
    return children;
}
export default Privateroute;