import React from 'react'
import { useEffect, useState, useRef } from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom'
function CartItems() {
  const navigate= useNavigate();
  function nav(){
      navigate('shipping')
  }
  let [Total,setTotal1] = useState();
  let x= JSON.parse(localStorage.getItem("TotalCartValue"))
  // setTotal1()
  
  let CartItems = [
    {img:'https://cdn.shopify.com/s/files/1/0233/5133/products/20220906_THEHORSE_TCT_151_small.jpg?v=1663023568',
      title:"The Travel Wallet: Tan",
      discount:-41.99,
      price:97.96,
      strikethroughPrice: 139.95},
      {img:'https://cdn.shopify.com/s/files/1/0233/5133/products/20220906_THEHORSE_TCT_151_small.jpg?v=1663023568',
      title:"The Travel Wallet: Tan",
      discount:-41.99,
      price:100,
      strikethroughPrice: 139.95}
  ]

  let [CartItemValueTotal,setCartItemValueTotal] = useState(0);
  let [PaybleValueAfterDiscount, setPaybleValueAfterDiscount] = useState();
  let CartTotalFixedDecimal=0;
  let CartTotal = CartItems.reduce((prev,ele)=>{
    return prev.price+ele.price
  })

  useEffect(()=>{
    setCartItemValueTotal(parseFloat(CartTotal.toFixed(2)))
    setPaybleValueAfterDiscount(parseFloat(CartTotal.toFixed(2)))
  },[])

  let [CouponCode,setCouponCode] = useState('');
  let enableCouponButton = useRef(true);
  
  function VerifyCouponCode(e){
      // setEnableCouponButton(false);
      if(e.target.value!=""){
        enableCouponButton.current.disabled=false;
        enableCouponButton.current.style.transition = "0.5s"
        enableCouponButton.current.style.backgroundColor="rgb(24, 120, 185)"
      }else{
        enableCouponButton.current.disabled=true;
        enableCouponButton.current.style.transition = "0.5s"
        enableCouponButton.current.style.backgroundColor="#c8c5c5"
      }
      setCouponCode(e.target.value);
  }
  // NewUser20
  
  function ApplyCouponCode(){
    console.log(PaybleValueAfterDiscount)
          if(CouponCode==="NewUser20"){
            setCoponSuccess(false);
            setCoponFail(true);
            setPaybleValueAfterDiscount((CartItemValueTotal*.8).toFixed(2))
            enableCouponButton.current.disabled=true;
            enableCouponButton.current.style.transition = "0.5s"
            enableCouponButton.current.style.backgroundColor="#c8c5c5"
          }
          else{
            setPaybleValueAfterDiscount(parseFloat(CartTotal.toFixed(2)))
            setCoponFail(false);
            setCoponSuccess(true)
          }
  }

  let [CoponSuccess, setCoponSuccess] = useState(true)
  let [CopounFail, setCoponFail] = useState(true)


  return (
    <div id='Checkout-CartDetails'>
      {/* cart items display */}
      {CartItems.map((ele)=>{
        return (
          <div className="Checkout-AddedCartItems">
          <div className="Checkout-Cart-Product-Image"><img src={ele.img} alt="" /></div>
          <div className="Checkout-CartItem-Desc">
            <p>{ele.title}</p>
            <p> CYBER (${ele.discount})</p>
          </div>
          <div className='Checkout-CartItem-Price'>
            <p>${ele.strikethroughPrice}</p>
            <p>${ele.price}</p>
          </div>
        </div>
        )
      })}
  {/* coupon and total section */}
        <hr />
        <div id='Checkout-Coupon'>
          <input onChange={VerifyCouponCode} type="text" placeholder='Gift card or discount code' />
          <button ref={enableCouponButton} onClick={ApplyCouponCode}>Apply</button>
        </div>
        <div id='CouponCodeMessasge'><p style={{color:"green"}} hidden={CoponSuccess}>Coupon applied successfully</p>
        <p style={{color:"red"}} hidden={CopounFail}>Invalid coupon!</p></div>
        <hr />
  
        <div id='Subtotal'>
          <div>
            <p>Subtotal</p>
            <p>${CartItemValueTotal}</p>
          </div>
          <div>
            <p>Shipping</p>
            <p>Free</p>
          </div>
        </div>
        <hr />
        <div id='Total'>
          <p>Total</p>
          <p><span>Aud</span>${PaybleValueAfterDiscount}</p>
        </div>
    </div>
 
  )
}

export default CartItems






