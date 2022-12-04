import React from 'react'
import Styles from './Styles/orders.module.css';
import OrderCard from './OrderCard';
import { useState, useEffect } from 'react';
import { Alert, AlertIcon, AlertTitle, AlertDescription, Slide } from '@chakra-ui/react'


const Orders = () => {
    const [order, setOrder] = useState([]);
    const [alert, setAlert] = useState(false);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3001/order').then((res) => (res.json())).then((data) => { setOrder(data); setLoad(true) });
    }, []);

    async function reorder(Id) {
        let dataobj = {};
        order.map((ele) => {
            if ((ele.id) === Id) {
                dataobj = { ...ele, "id": Id };
            }
        });
        await fetch('http://localhost:3001/cartPage', {
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
            <Slide in={alert} direction='top' position='fixed' top='0px' style={{ zIndex: 10 }}>
                <Alert status='success' w='40vw' mx='30vw' mt='50px' flexWrap='wrap'>
                    <AlertIcon />
                    <AlertTitle>Repurchase item added to cart Succesfully!</AlertTitle>
                    <AlertDescription>Thank you!</AlertDescription>
                </Alert>
            </Slide>

            <div className={Styles.div1}>
                <p className={Styles.p1}>Orders</p>
                <div className={Styles.div2}>
                    {load ? (
                        order.map((ele) => {
                            return (<OrderCard key={ele.id} imgURL={ele.img1} title={ele.title} price={ele.price} Id={ele.id}
                                reorder={reorder} />);
                        })
                    ) : <p className={Styles.loader}>Order history is Loading...</p>
                    }
                </div>
            </div>
        </div>)
}

export default Orders