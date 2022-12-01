import React from 'react'
import { useState } from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom'
function CartItems() {
  const navigate= useNavigate();
  function nav(){
      navigate('shipping')
  }
  let [Total,setTotal1] = useState();
  let x= JSON.parse(localStorage.getItem("TotalCartValue"))
  // setTotal1()
  return (
    <div id='Checkout-CartDetails'>
        <div className="Checkout-AddedCartItems">
          <div className="Checkout-Cart-Product-Image"><img src="https://cdn.shopify.com/s/files/1/0233/5133/products/20220906_THEHORSE_TCT_151_small.jpg?v=1663023568" alt="" /></div>
          <div className="Checkout-CartItem-Desc">
            <p>The Travel Wallet: Tan</p>
            <p> CYBER (-$41.99)</p>
          </div>
          <div className='Checkout-CartItem-Price'>
            <p>$139.95</p>
            <p>$97.96</p>
          </div>
        </div>
        <hr />
        <div id='Checkout-Coupon'>
          <input type="text" placeholder='Gift card or discount code' />
          <button disabled='true'>Apply</button>
        </div>
        <hr />
        <div id='Subtotal'>
          <div>
            <p>Subtotal</p>
            <p>$342</p>
          </div>
          <div>
            <p>Shipping</p>
            <p>Free</p>
          </div>
        </div>
        <hr />
        <div id='Total'>
          <p>Total</p>
          <p><span>Aud</span>${342}</p>
        </div>
    </div>
 
  )
}

export default CartItems