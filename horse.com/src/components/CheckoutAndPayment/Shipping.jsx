import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { Link , useNavigate} from 'react-router-dom'
import './Shipping.css'
function Shipping() {
    let returnToInformation = useNavigate();
    function returnToInformationComp(){
        returnToInformation('/checkout/information')
    }

    let ContinueToShipping = useNavigate();
    function ContinueToShippingPage(){
        ContinueToShipping('/checkout/payment')
    }
    let ShipToAddress = JSON.parse(localStorage.getItem("UserAddress"));
    let isFree = useRef()
    let isExpress = useRef()
    let [Total,setTotal] = useState(null)
    useEffect(()=>{
        isFree.current.checked=true;
    },[])
   
    function FreeDelivery(){
        console.log(isFree.current.checked===true);
        if(isFree.current.checked===true){
            // setTotal(Total)
            localStorage.setItem("TotalCartValue",JSON.stringify(Total))
        }
        else if(isExpress.current.checked===true){
            // setTotal(Total-10)
            localStorage.setItem("TotalCartValue",JSON.stringify(Total-10))
        }
    }
function change(){
    console.log("j")
}
let ans=localStorage.getItem("thehorse-name");

   
  return (
    <div id='CheckoutInformation'>
    <div id='CheckoutWebSiteName'>
        {/* <Link to={'/'}>The Horse</Link> */}
        <a href="#" id='CheckoutWebSiteName-Header'>The Hourse</a>
    </div>
    <div id='page-location'>
        {/* <Link to='#'>Cart</Link> */}
        <a href="">Cart </a> &nbsp; <span><i class="fa-solid fa-chevron-right"></i> </span> &nbsp;
        <a href=""> Information</a>&nbsp;
        <span><i class="fa-solid fa-chevron-right"></i></span>&nbsp;
        <a href="" style={{color: "gray", fontWeight:"500"}}> Shipping</a>&nbsp;
        <span><i class="fa-solid fa-chevron-right"></i></span>&nbsp;
        <a href="" style={{color: "rgb(24, 120, 185)",fontWeight:"400"}}> Payment</a>&nbsp;
    </div>
    <div id='ShippingDetails'>
            <div id='ShippingDetails-contact'>
                <div><p>Contact</p></div>
                <div>{ans}1472@gmail.com</div>
                <button>Change</button>
            </div>
            <hr />
            <div id='ShippingDetails-shipto'>
                <div><p>Ship to</p></div>
                <div>{`${ShipToAddress.Street},${ShipToAddress.Suburb},${ShipToAddress.State},
                ${ShipToAddress.Country_Region},${ShipToAddress.Postcode}`}</div>
                <button>Change</button>
            </div>
        </div>
        <div id='ShippingMethod'>
            <p>Shipping Method</p>
            <div id='Shipping-free'>
                <div>
                <input type="radio" name='DeliveryMethod'  ref={isFree} onClick={change} onChange={FreeDelivery}/>
                <label htmlFor="">Free Shipping (2-5 Business days)</label>
                </div>
                <div><p>Free</p></div>
            </div>
            <hr />
            <div id='Shipping-express'>
                <div>
                <input type="radio" name='DeliveryMethod'ref={isExpress} onChange={FreeDelivery}/>
                <label htmlFor="" >	Express Shipping (1-3 Business days)</label>
                </div>
                <div><p>$10</p></div>
            </div>
        </div>
        <div id='AddressFormSubmit'>
            <button id='returntocart' onClick={returnToInformationComp}> <i class="fa-solid fa-angle-left"></i> Return to Information</button>
            <button id='ContinueToShipping' onClick={ContinueToShippingPage}>Continue to payment</button>

        </div>
        <div id='Checkout-Policy'>
            <p>Refund Policy</p>
            <p>Shipping Policy</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
        </div>
</div>
  )
}

export default Shipping