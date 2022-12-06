import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState({ data: {}, loggedin: false });

    useEffect(() => {
        let token = localStorage.getItem('thehorse-token');
        if (token) {

            (async () => {
                let res = await fetch(` https://mock-server-app-fqpl.onrender.com/users?token=${token}`);
                let data = await res.json();
                setIsAuth({ ...isAuth, data: data, loggedin: true })
            })()

        }
    }, [])

    return <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        {children}
    </AuthContext.Provider>
}