import React from 'react';
import Styles from './Styles/wishlist.module.css';
import { useState, useEffect, useContext } from 'react';
import WishlistCard from './WishlistCard';
import { Alert, AlertIcon, AlertTitle, AlertDescription, Slide } from '@chakra-ui/react';




const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const [alert, setAlert] = useState(false);
    const [dlte, setDlte] = useState(false);
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
    }



    async function deleteW(Id) {
        await fetch(`http://localhost:3001/wishlist/${Id}`, {
            method: "DELETE"
        }).then(() => {
            setDlte(true);
            setTimeout(() => { setDlte(false) }, 2000);
        });
        await fetch(' http://localhost:3001/wishlist').then((res) => (res.json())).then((data) => { setWishlist(data) });
    }




    return (

        <div>
            <Slide in={alert} direction='top' position='fixed' top='0px' style={{ zIndex: 10 }}>
                <Alert status='success' w='40vw' mx='30vw' mt='50px' flexWrap='wrap'>
                    <AlertIcon />
                    <AlertTitle>Product Added Succesfully!</AlertTitle>
                    <AlertDescription>Visit cart page to checkout</AlertDescription>
                </Alert>
            </Slide>
            <Slide in={dlte} direction='top' position='fixed' top='0px' style={{ zIndex: 10 }}>
                <Alert status='success' w='40vw' mx='30vw' mt='50px' flexWrap='wrap'>
                    <AlertIcon />
                    <AlertTitle>Product removed Succesfully!</AlertTitle>
                    <AlertDescription>Happy Shoping!</AlertDescription>
                </Alert>
            </Slide>
            <div className={Styles.div1}>
                <p className={Styles.p1}>Wishlist</p>
                <div className={Styles.div2}>
                    {load ? (
                        wishlist.map((ele) => {
                            return (<WishlistCard key={ele.id} imgURL={ele.img1} title={ele.title} price={ele.price} Id={ele.id}
                                addtocart={addtocart} deleteW={deleteW} />);
                        })) : <p className={Styles.loader}>Wishlist is Loading...</p>
                    }
                </div>
            </div>
        </div >
    )




}

export default Wishlist