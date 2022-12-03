import React from 'react'
import { useContext } from 'react';
import { AuthContext } from './API/Context';

const Logout = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    localStorage.setItem("thehorse-token", "");
    localStorage.setItem("thehorse-name", "");
    setIsAuth({ ...isAuth, data: {}, loggedin: false })
    return (
        <div>
        </div>
    )
}

export default Logout;