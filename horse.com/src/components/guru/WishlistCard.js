import React from 'react';
import Styles from './Styles/wishlistCard.module.css'

const WishlistCard = ({ imgURL, title, price, Id, addtocart }) => {
    return (
        <div className={Styles.div1}>
            <img src={imgURL} />
            <div className={Styles.div2}>
                <p className={Styles.p1}>{title}</p>
                <p className={Styles.p2}>$ {price}</p>
            </div>
            <button onClick={() => { addtocart(Id) }}>Add to Cart</button>
        </div>
    )
}

export default WishlistCard
