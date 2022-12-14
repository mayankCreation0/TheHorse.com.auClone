import React,{useEffect, useState}  from 'react'
import {useNavigate} from 'react-router-dom'
import './OrderConfirmation.css'
function OrderConfirmation() {
    let navigatetoPaymentGateWay = useNavigate();
    let [dot, setDot] = useState("")
    useEffect(()=>{
        setTimeout(()=>{
            navigatetoPaymentGateWay('/')
        },3000)

    },[])
    setTimeout(()=>{
        setDot((dot)=>dot+".")
    },1000)
  return (
    <div id='OrderConfirmationDiv'>
        <div id='OrderSuccessimgProcess'>
            <img src="https://cajobs.icai.org/images/new_home/success.gif" alt="" />
        </div>
        <div id="OrderInfo">
            <p>Payment Successful </p>
            <p>Order ID:- AU-28425661 </p>
        </div>
        <div id='infoOrderConfirmation'>
            <p>Redirecting you to Home Page </p><div id='dot'>{dot}</div>
        </div>
    </div>
  )
}

export default OrderConfirmation