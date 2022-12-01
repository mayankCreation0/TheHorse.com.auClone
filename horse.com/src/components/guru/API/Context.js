import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState({ data: {}, loggedin: false });

    useEffect(() => {
        let token = localStorage.getItem('thehorse-token');
        if (token) {

            (async () => {
                let res = await fetch(`http://localhost:3001/users?token=${token}`);
                let data = await res.json();
                setIsAuth({ ...isAuth, data: data, loggedin: true });
            })()
            console.log(isAuth)
        }
    }, [])
    console.log(isAuth);
    return <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        {children}
    </AuthContext.Provider>
}