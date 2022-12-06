import React from 'react'
import { Link, Outlet } from "react-router-dom";
import Styles from "./Styles/account.module.css";
import Navbar from '../mayankFolder/navbar/Navbar'
import Footer from '../mayankFolder/footer/footer'

const Account = () => {
    return (
        <> 
            <div className={Styles.div1}>
                <div className={Styles.div2}>
                    <Link className={Styles.links} to="">Dashboard</Link>
                    <Link className={Styles.links} to="wishlist">Wishlist</Link>
                    <Link className={Styles.links} to="orders">Orders</Link>
                    <Link className={Styles.links} to="addresses">Addresses</Link>
                    <Link className={Styles.links} to="/logout">Logout</Link>
                </div>
                <div className={Styles.div3}><Outlet /></div>
            </div>
            <Footer />
        </>
    )
}

export default Account