import React from 'react'
import './Checkout.css'
import './CheckoutInformation.css'
import './CartItems.css'
import CartItems from './CartItems.jsx'
import Payment from './Payment'
import './Payment.css'
import CheckoutInformation from './CheckoutInformation'
import Shipping from './Shipping'
import OrderConfirmation from './OrderConfirmation'
import {Link,Outlet} from 'react-router-dom'


function Checkout() {
  return (
    <div id='CheckoutMain'>
        <div id='CheckoutLeft'>
          <Outlet/>
          {/* <Link to={}/> */}
          {/* <Payment/> */}
          {/* <Shipping/> */}
            {/* <CheckoutInformation/> */}
        </div>
        <div id='CheckoutRight'>
            <CartItems/>
        </div>
    </div>
  )
}

export default Checkout