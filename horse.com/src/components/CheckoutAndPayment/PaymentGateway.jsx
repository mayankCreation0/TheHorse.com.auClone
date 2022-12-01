import React from 'react'
import { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './PaymentGateway.css'
function PaymentGateway() {
    let [minute,setMinute] = useState(4)
    let [seconds,setSeconds] =useState(59)
    let [runStatus, setRunStatus] = useState(false)
    let [OTPVerificationFail,setOTPVerificationFail] = useState(true)
    useEffect(()=>{
        // setRunStatus(true)
        // if(runStatus===true){
        //     setMinute((state)=>state-1)
        //     setSeconds(59)
        // }
        setInterval(()=>{
            setSeconds((seconds)=>seconds-1)
        },1000)
    },[])
    
    let [OTP, setOTP] = useState("");
    function GetOTP(e){
        setOTP(e.target.value);
    }

    let NavigateToHome = useNavigate();
    function VerifyOTP(){
        console.log(OTP);
        // NavigateToHome('/paymentprocessing');
        if(OTP==="123456"){
            NavigateToHome('/paymentprocessing');
        }
        else{
            setOTPVerificationFail(false);
        }
       
    }

  return (
    <div id='PaymentGatewayDiv'>
        <div id='visaImage'>
            <img src="https://pngimg.com/uploads/visa/visa_PNG8.png" alt="" />
        </div>
        <div>
            <p>OTP sent to your registered mobile number</p>
        </div>
        <div id='OTPInput'>
            <input type="password" placeholder='Enter OTP' onChange={GetOTP}/>
            <button onClick={VerifyOTP}>Submit</button>
        </div>
        <div id='wrongOTP' hidden={OTPVerificationFail}><p>Wrong OTP</p></div>
        <div>
            <p id='resendOTP'>Resend OTP</p>
        </div>
        <div>
            <p>OTP will expire in <span>{`${minute}:${seconds}`}</span> minutes</p>
        </div>
        <div>
            <p>Do NOT close or refresh the page</p>
        </div>
    </div>
  )
}

export default PaymentGateway