import React from 'react'
import { useContext } from 'react';
import { AuthContext } from './API/Context';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    let navigate=useNavigate();
    localStorage.setItem("thehorse-token", "");
    localStorage.setItem("thehorse-name", "");

    navigate("/");

    setIsAuth({ ...isAuth, data: {}, loggedin: false })


   
    
     
    return (
        <div>
        </div>
    )
}

export default Logout;