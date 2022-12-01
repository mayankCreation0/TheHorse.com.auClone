import React from 'react';
import Styles from './Styles/wishlist.module.css';
import { useState, useEffect, useContext } from 'react';
import WishlistCard from './WishlistCard';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';



const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const [alert, setAlert] = useState(false);
    const [load, setLoad] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:3001/wishlist`).then((res) => (res.json())).then((Data) => { setWishlist(Data); setLoad(true) });
    }, [])



    async function addtocart(Id) {
        let dataobj = {};
        wishlist.map((ele) => {
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
        });
        await fetch(`http://localhost:3001/wishlist/${Id}`, {
            method: "DELETE"
        });
        await fetch('http://localhost:3001/wishlist').then((res) => (res.json())).then((data) => { setWishlist(data) });
    }




    return (
        load ? (
            <div>
                < div className={Styles.alert} >
                    {alert && <Alert p="5px" m="0px" status='success' variant='subtle' >
                        <AlertIcon />
                        Product added to cart. Happy shopping!
                    </Alert>
                    }
                </div >
                <div className={Styles.div1}>
                    <p className={Styles.p1}>Wishlist</p>
                    <div className={Styles.div2}>
                        {
                            wishlist.map((ele) => {
                                return (<WishlistCard key={ele.id} imgURL={ele.imgURL} title={ele.title} price={ele.price} Id={ele.id}
                                    addtocart={addtocart} />);
                            })
                        }
                    </div>
                </div>
            </div >
        ) : <Spinner />

    )


}

export default Wishlist