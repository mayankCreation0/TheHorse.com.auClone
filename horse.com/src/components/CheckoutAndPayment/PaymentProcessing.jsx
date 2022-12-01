import React,{useEffect, useState}  from 'react'
import {useNavigate} from 'react-router-dom'
import './PaymentProcessing.css'
function PaymentProcessing() {
    let navigatetoPaymentGateWay = useNavigate();
    let [dot, setDot] = useState("")
    useEffect(()=>{
        setTimeout(()=>{
            navigatetoPaymentGateWay('/orderconfirmation')
        },3000)

    },[])
    setTimeout(()=>{
        setDot((dot)=>dot+".")
    },1000)
  return (
    <div id='PaymentProcessingDiv'>
        <div id='imgProcess'>
            <img src="https://flevix.com/wp-content/uploads/2019/12/Quarter-Circle-Loading-Image-1.gif" alt="" />
        </div>
        <div id='infoPaymentProcessing'>
        <p>Processinging your Payment </p><div id='dot'>{dot}</div>
        </div>
    </div>
  )
}

export default PaymentProcessing