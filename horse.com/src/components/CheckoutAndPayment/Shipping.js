import React from 'react'
import './Shipping.css'
function Shipping() {
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
        <a href=""> Shipping</a>&nbsp;
        <span><i class="fa-solid fa-chevron-right"></i></span>&nbsp;
        <a href=""> Shipping</a>&nbsp;
    </div>
    <div id='ShippingDetails'>
            <div id='ShippingDetails-contact'>
                <div><p>Contact</p></div>
                <div>nishant810125@gmail.com</div>
                <button>Change</button>
            </div>
            <hr />
            <div id='ShippingDetails-shipto'>
                <div><p>Ship to</p></div>
                <div>38 Park Street, South Melbourne VIC 3205, Australia</div>
                <button>Change</button>
            </div>
        </div>
        <div id='ShippingMethod'>
            <p>Shipping Method</p>
            <div id='Shipping-free'>
                <div>
                <input type="radio" name='DeliveryMethod' />
                <label htmlFor="">Free Shipping (2-5 Business days)</label>
                </div>
                <div><p>Free</p></div>
            </div>
            <hr />
            <div id='Shipping-express'>
                <div>
                <input type="radio" name='DeliveryMethod'/>
                <label htmlFor="">	Express Shipping (1-3 Business days)</label>
                </div>
                <div><p>$10</p></div>
            </div>
        </div>
        <div id='AddressFormSubmit'>
            <button id='returntocart'> <i class="fa-solid fa-angle-left"></i> Return to Information</button>
            <button type='submit' id='ContinueToShipping'>Continue to payment</button>
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