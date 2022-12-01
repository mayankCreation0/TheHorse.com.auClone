import React,{useRef} from 'react'
import { Form } from 'react-router-dom'
import './Payment.css'
import {Link, useNavigate} from 'react-router-dom'
function Payment() {
    let CreditCardRef = useRef(null)
    let PaypalRef = useRef(null)
    let AfterPayRef = useRef(null)
    let LaybuyRef = useRef(null)
    function CrediCardEnable(){
        CreditCardRef.current.style.display = "flex"
        PaypalRef.current.style.display = "none"
        AfterPayRef.current.style.display = "none"
        LaybuyRef.current.style.display = "none"
    }
    function PaypalEnable(){
        CreditCardRef.current.style.display = "none"
        PaypalRef.current.style.display = "flex"
        AfterPayRef.current.style.display = "none"
        LaybuyRef.current.style.display = "none"
    }
    function AfterPayEnable(){
        CreditCardRef.current.style.display = "none"
        PaypalRef.current.style.display = "none"
        AfterPayRef.current.style.display = "flex"
        LaybuyRef.current.style.display = "none"
    }
    function LaybuyEnable(){
        CreditCardRef.current.style.display = "none"
        PaypalRef.current.style.display = "none"
        AfterPayRef.current.style.display = "none"
        LaybuyRef.current.style.display = "flex"
    }

    let returnToShipping = useNavigate();
    function returnToShippingComp(){
        returnToShipping('/checkout/shipping')
    }

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
        <a href="" id='shipping-loc'> Shipping</a>&nbsp;
        <span><i class="fa-solid fa-chevron-right"></i></span>&nbsp;
        <a href=""> Payment</a>&nbsp;
    </div>
    <div id='PaymentDetails'>
            <div id='PaymentDetails-contact'>
                <div><p>Contact</p></div>
                <div>nishant810125@gmail.com</div>
                <button>Change</button>
            </div>
            <hr />
            <div id='PaymentDetails-shipto'>
                <div><p>Ship to</p></div>
                <div>38 Park Street, South Melbourne VIC 3205, Australia</div>
                <button>Change</button>
            </div>
            <hr />
            <div id='PaymentDetails-method'>
                <div><p>Method</p></div>
                <div>Free Shipping (2-5 Business days) · Free</div>
                <button>Change</button>
            </div>
        </div>
        <div id='PaymentMethod'>
            <p>Payment</p>
            <p>All transactions are secure and encrypted.</p>
            <div id='Payment-CreditCard'>
                <div>
                <input type="radio" name='paymentmethod' onChange={CrediCardEnable}/>
                <label htmlFor="">Credit Card</label>
                </div>
                <div id='CardIcon'>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
            <div id='CardDetails' ref={CreditCardRef}>
                <div>
                <input type="number" placeholder='Card number' />
                    <input type="text" placeholder='Name on card'/>
                    <div id='CardDetail-SubEntry'>
                        <input type="text" placeholder='Expiration date (MM / YY)'/>
                        <input type="number" placeholder='Security code' />
                    </div>
                </div>
            </div>
            <div id='Payment-Paypal'>
                <div>
                <input type="radio" name='paymentmethod'onChange={PaypalEnable}/>
                <img src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png" alt="" />
                </div>
            </div>
            <div id='RedirecttoPayment-Paypal' ref={PaypalRef}>
                <div>
                    <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/checkout_2021-01-25/offsite-908d79d8d532f6af67d7cc99244ede733729c29379c349ee015fbcea71fd8274.svg" alt="" />
               <p>
                    After clicking “Complete order”, you will be redirected 
                    to PayPal to complete your purchase securely.
                </p>
                </div>
            </div>
            <div id='Payment-AfterPay'>
                <div>
                <input type="radio" name='paymentmethod' onChange={AfterPayEnable}/>
                <label htmlFor="">After Pay</label>
                </div>
            </div>
            <div id='RedirecttoPayment-AfterPay' ref={AfterPayRef}>
                <div>
                <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/checkout_2021-01-25/offsite-908d79d8d532f6af67d7cc99244ede733729c29379c349ee015fbcea71fd8274.svg" alt="" />
               <p>
                    After clicking “Complete order”, you will be redirected 
                    to After-Pay to complete your purchase securely.
                </p>
                </div>
            </div>
            <div id='Payment-Laybuy'>
                <div>
                <input type="radio" name='paymentmethod' onChange={LaybuyEnable}/>
                <label htmlFor="">Laybuy</label>
                </div>
            </div>
            <div id='RedirecttoPayment-Laybuy' ref={LaybuyRef}>
                <div>
                <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/checkout_2021-01-25/offsite-908d79d8d532f6af67d7cc99244ede733729c29379c349ee015fbcea71fd8274.svg" alt="" />
                <p>
                    After clicking “Complete order”, you will be redirected 
                    to Laybuy to complete your purchase securely.
                </p>
                </div>
            </div>
        </div>
        <div id='BillingAddress'>
            <p>Billing address</p>
            <p>Select the address that matches your card or payment method.</p>
            <div id='BillingAddress-Same'>
                <div>
                <input type="radio" />
                <label htmlFor="">Same as shipping address</label>
                </div>
            </div>
            <div id='BillingAddress-Different'>
                <div>
                <input type="radio" />
                <label htmlFor="">Use a different billing address</label>
                </div>
            </div>
        </div>
        <div id='AddressFormSubmit'>
            <button id='returntocart' onClick={returnToShippingComp}> <i class="fa-solid fa-angle-left"></i> Return to Shipping</button>
            <button id='ContinueToPayment'>Complete payment</button>
        </div>
        <div id='Checkout-Policy'>
            <p>Refund Policy</p>
            <p>Payment Policy</p>
            <p>Shipping Policy</p>
            <p>Terms of Service</p>
        </div>
</div>
  )
}

export default Payment