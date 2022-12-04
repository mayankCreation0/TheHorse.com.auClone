import React from 'react';
import Styles from './Styles/wishlistCard.module.css'
import { FaHeart } from 'react-icons/fa'

const WishlistCard = ({ imgURL, title, price, Id, addtocart, deleteW }) => {
    return (
        <div className={Styles.div1}>
            <button className={Styles.w_btn} onClick={() => { deleteW(Id) }}><FaHeart color='white' /></button>
            <img src={imgURL} />
            <div className={Styles.div2}>
                <p className={Styles.p1}>{title}</p>
                <p className={Styles.p2}>$ {price}</p>
            </div>
            <button className={Styles.a_btn} onClick={() => { addtocart(Id) }}>Add to Cart</button>
        </div>
    )
}

export default WishlistCard
