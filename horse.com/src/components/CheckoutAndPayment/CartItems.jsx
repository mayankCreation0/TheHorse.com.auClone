import React from 'react'
import { useEffect, useState, useRef } from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom'
function CartItems() {

  const navigate = useNavigate();
  function nav(){
      navigate('shipping');
  }
 
  let [CartItems,setCartItems] = useState([]);

  let [CartSubTotal,setCartSubTotal] = useState(0);
  let [CouponCode,setCouponCode] = useState('');
  let [PaybleValueAfterDiscount, setPaybleValueAfterDiscount] = useState();
  let [CoponSuccess, setCoponSuccess] = useState(true);
  let [CopounFail, setCoponFail] = useState(true);
  let enableCouponButton = useRef(true);
  
  useEffect(()=>{
  fetch("https://mock-server-app-fqpl.onrender.com/cartPage").
  then((res)=>res.json()).then((data)=>{
    setCartItems(data);
     let sum=0
    for(let i=0; i<data.length; i++){
      sum=sum+(data[i].price*data[i].quantity);
    }
    setCartSubTotal(parseFloat(sum.toFixed(2)));
    setPaybleValueAfterDiscount(parseFloat(sum.toFixed(2)));
    })       

},[]);
  
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

  function ApplyCouponCode(){
          if(CouponCode==="newuser20"){
            setCoponSuccess(false);
            setCoponFail(true);
            setPaybleValueAfterDiscount((CartSubTotal*.8).toFixed(2))
            enableCouponButton.current.disabled=true;
            enableCouponButton.current.style.transition = "0.5s"
            enableCouponButton.current.style.backgroundColor="#c8c5c5"
          }
          else{
            setPaybleValueAfterDiscount(parseFloat(CartSubTotal.toFixed(2)))
            setCoponFail(false);
            setCoponSuccess(true)
          }
  }

  return (
    <div id='Checkout-CartDetails'>
      {/* cart items display */}
        {[...CartItems].map((ele)=>{
        return (
          <div className="Checkout-AddedCartItems">
          <div className="Checkout-Cart-Product-Image">
            <img src={ele.img1} alt="" />
            <div id='quantitydivincheckoutpage'>{ele.quantity}</div>
          </div>
          <div className="Checkout-CartItem-Desc">
            <p>{ele.title}</p>
            <p> CYBER (-${((ele.discount*ele.price)/100).toFixed(2)})</p>
          </div>
          <div className='Checkout-CartItem-Price'>
            <p>${ele.price}</p>
            <p>${ele.price*ele.quantity}</p>
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
            <p>${CartSubTotal}</p>
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






