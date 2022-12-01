import React from 'react'
import './PaymentGateway.css'
function PaymentGateway() {
  return (
    <div id='PaymentGatewayDiv'>
        <div id='visaImage'>
            <img src="https://pngimg.com/uploads/visa/visa_PNG8.png" alt="" />
        </div>
        <div>
            <p>OTP sent to your registered mobile number</p>
        </div>
        <div id='OTPInput'>
            <input type="password" placeholder='Enter OTP' />
            <button>Submit</button>
        </div>
        <div>
            <p>Do NOT close or refresh the page</p>
        </div>
    </div>
  )
}

export default PaymentGateway