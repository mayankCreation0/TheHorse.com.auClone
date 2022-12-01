import React from 'react';
import Styles from './Styles/dashboard.module.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className={Styles.div1}>
            <p className={Styles.p1}>Hi Guru</p>
            <img src="https://cdn.shopify.com/s/files/1/0233/5133/files/Rectangle_412_830x.jpg?v=1647570725" />
            <div className={Styles.div2}>
                <h6>Welcome! From your account dashboard you can view and edit your <Link to="/account" style={{ textDecoration: 'underline' }}>account details</Link>,<br></br>
                    peruse your wishlist, view your recent orders and manage your <Link to="/account/addresses" style={{ textDecoration: 'underline' }}>addresses</Link>.</h6>

            </div>
        </div >

    )
}

export default Dashboard