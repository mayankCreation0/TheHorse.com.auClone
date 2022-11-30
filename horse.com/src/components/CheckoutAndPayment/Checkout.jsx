import React from 'react'
import './Checkout.css'
import './CheckoutInformation.css'
import './CartItems.css'
import CartItems from './CartItems.jsx'
import CheckoutInformation from './CheckoutInformation'
import Shipping from './Shipping'

function Checkout() {
  return (
    <div id='CheckoutMain'>
        <div id='CheckoutLeft'>
          <Shipping/>
            {/* <CheckoutInformation/> */}
        </div>
        <div id='CheckoutRight'>
          <CartItems/>
        </div>
    </div>
  )
}

export default Checkout