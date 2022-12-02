import React from 'react';
import Styles from './Styles/orderCard.module.css';

const OrderCard = ({ imgURL, title, price, Id, reorder }) => {
    return (

        <div className={Styles.div1}>
            <img src={imgURL} />
            <div className={Styles.div2}>
                <p className={Styles.p1}>{title}</p>
                <p className={Styles.p2}>$ {price}</p>
            </div>
            <button onClick={() => { reorder(Id) }}>Reorder</button>
        </div>

    )
}

export default OrderCard