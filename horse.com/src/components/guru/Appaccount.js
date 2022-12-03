import React from 'react';
import Styles from "./Styles/app.module.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Account from './Account'
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Wishlist from './Wishlist';
import Orders from './Orders';
import Logout from './Logout';
import Addresses from './Addresses';
import Recaptcha from './Recaptcha';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthContextProvider } from './API/Context';
import Privateroute from './routes/Privateroute';

const Appaccount = () => {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <ChakraProvider>
                    <div className={Styles.div1}>

                        <Routes>
                            <Route path="/account/login" element={<Login />} />
                            <Route path="/account/register" element={<Signup />} />
                            <Route path="/challenge" element={<Recaptcha />} />
                            <Route path="/account" element={<Privateroute><Account /></Privateroute>}>
                                <Route path="" element={<Dashboard />} />
                                <Route path="wishlist" element={<Wishlist />} />
                                <Route path="orders" element={<Orders />} />
                                <Route path="addresses" element={<Addresses />} />
                                <Route path="logout" element={<Logout />} />
                            </Route>
                        </Routes>

                    </div>
                </ChakraProvider>
            </AuthContextProvider>
        </BrowserRouter>
    )
}

export default Appaccount;