import React from 'react'
import Styles from './Styles/orders.module.css';
import OrderCard from './OrderCard';
import { useState, useEffect } from 'react';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'


const Orders = () => {
    const [order, setOrder] = useState([]);
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3001/order').then((res) => (res.json())).then((data) => { setOrder(data) });
    }, []);

    async function reorder(Id) {
        let dataobj = {};
        order.map((ele) => {
            if ((ele.id) === Id) {
                dataobj = { ...ele, "id": Id };
            }
        });
        await fetch('http://localhost:3001/cart', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(dataobj)
        }).then(() => {
            setAlert(true);
            setTimeout(() => { setAlert(false) }, 2000);
        })
    }



    return (
        <div>
            <div className={Styles.alert}>
                {alert && <Alert p="5px" m="0px" status='success' variant='subtle' >
                    <AlertIcon />
                    Product added to cart. Happy shopping!
                </Alert>}
            </div>

            <div className={Styles.div1}>
                <p className={Styles.p1}>Orders</p>
                <div className={Styles.div2}>
                    {
                        order.map((ele) => {
                            return (<OrderCard key={ele.id} imgURL={ele.imgURL} title={ele.title} price={ele.price} Id={ele.id}
                                reorder={reorder} />);
                        })
                    }
                </div>
            </div>
        </div>)
}

export default Orders