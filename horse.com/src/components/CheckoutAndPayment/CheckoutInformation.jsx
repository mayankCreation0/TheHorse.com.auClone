import React,{useRef, useState} from 'react'
import './CheckoutInformation.css'
import CartItems from './CartItems'
import { Link, useNavigate } from 'react-router-dom'

function CheckoutInformation() {

    let ShipDelivery = useRef(null)
    let Pickup = useRef(null)
    let [DeliveryDefault,setDeliveryDefault] = useState(true)
    let [deliveryType,setDeliveryType] = useState(true)
    let deliveryShip =()=>{
        setDeliveryDefault(true);
        ShipDelivery.current.hidden = false;
        Pickup.current.hidden = true;
    }
    let deliveryPickup = ()=>{
        setDeliveryDefault(false);
        ShipDelivery.current.hidden = true;
        Pickup.current.hidden = false;
    }
    let CountryNames = ['Australia','---------', 'Argentina', 'Australia', 'Austria', 'Belgium', 'Bulgaria', 'Canada', 'Chile', 'China', 'Cook Islands', 'Croatia', 'Czechia', 'Denmark', 'Estonia', 'Fiji', 'Finland', 'France', 'French Polynesia', 'Germany', 'Greece', 'Hong Kong SAR', 'Hungary', 'Iceland', 'Indonesia', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Japan', 'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macao SAR', 'Malaysia', 'Malta', 'Mexico', 'Monaco', 'Netherlands', 'New Caledonia', 'New Zealand', 'Norway', 'Papua New Guinea', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Samoa', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sweden', 'Switzerland', 'Taiwan', 'Thailand', 'Turkey', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Vanuatu', 'Vietnam']
    let StateNames = ['State/territory','Australian Capital Territory','New South Wales','Northern Territory','Queensland','South Australia','Tasmania','Western Australia','Victoria']
    let formData = {AddressOption:"",
                    Country_Region:"",
                    FirstName:"",
                    LastName:"",
                    CompanyAddress:"",
                    Street:"",
                    Suburb:"",
                    State:"",
                    Postcode:"",
                    Phone:"",
                    OffersMail:""}
        let [UserAddress, setUserAddress] = useState(formData);
    function FormInputs(e){
        let {name, value,checked,type} = e.target;
        value = type==="checkbox" ? checked:value
        setUserAddress({...UserAddress,[name]: value});
    }
// let  {AddressOption,
// Country_Region,
// FirstName,
// LastName,
// CompanyAddress,
// Street,
// Suburb,
// State,
// Postcode,
// Phone,
// OffersMail} = UserAddress;
    let navigateShipping = useNavigate();
    function NavigateToShipping(e){
        e.preventDefault();
        console.log(UserAddress.FirstName);
        if(DeliveryDefault===true && (UserAddress.FirstName==="" && UserAddress.Country_Region==="" && UserAddress.LastName===""
        && UserAddress.Street===""&& UserAddress.Suburb===""&& UserAddress.State===""
        && UserAddress.Postcode==="" && UserAddress.Phone==="")){
            alert("Please fill all the deatails")
        }
        else{
            localStorage.setItem("UserAddress",JSON.stringify(UserAddress))
            navigateShipping('/checkout/shipping')
        }
    }

        let [enableCartWindow,setenableCartWindow] = useState(true)
    function ShowCartCompInMobileView(){
        if(enableCartWindow===true){
            setenableCartWindow(false);
        }
        else{
            setenableCartWindow(true);
        }
    }

  return (
    <div id='CheckoutInformation'>
        <div id='CheckoutWebSiteName'>
            {/* <Link to={'/'}>The Horse</Link> */}
            <a href="#" id='CheckoutWebSiteName-Header'>The Hourse</a>
        </div>
        <div id='page-location'>
            {/* <Link to='#'>Cart</Link> */}
            <a href="">Cart </a> &nbsp; <span><i className="fa-solid fa-chevron-right"></i> </span> &nbsp;
            <a href="" style={{color: "gray", fontWeight:"500"}}> Information</a>&nbsp;
            <span><i className="fa-solid fa-chevron-right"></i></span>&nbsp;
            <a href=""> Shipping</a>&nbsp;
            <span><i className="fa-solid fa-chevron-right"></i></span>&nbsp;
            <a href="" style={{color: "rgb(24, 120, 185)",fontWeight:"400"}}>Payment</a>&nbsp;
        </div>

        <div id='CartItemsForMobileView'>
            <div id='ShowHideSummary'>
            <i className="fa-solid fa-cart-shopping"></i> <button onClick={ShowCartCompInMobileView}> 
                {enableCartWindow===true ? "Show oreder summary":"Hide order summery"}</button>
            </div>
            <div id='CartComponentInMobileView' hidden={enableCartWindow}>
                <CartItems/>
            </div>
        </div>

        <div id='ExpressCheckOut'>
            <div id='ExpressCheckOut-Head'> 
                <p>Express Checkout</p> 
            </div>
            <div id='ExpressCheckOut-PaymentOptions'>
                <button id='ExpressCheckOut-PaymentOptions-1'><img src="https://i.ibb.co/7ysMmtx/Shop-Pay-White-1.png" alt="" /></button>
                <button id='ExpressCheckOut-PaymentOptions-2'><img src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png" alt="" /></button>
                <button id='ExpressCheckOut-PaymentOptions-3'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/768px-Google_Pay_Logo.svg.png?20221017164555" alt="" /></button>
            </div>
        </div>
        <div id='Seperator-div'>
            <div id='Seperator-div-Or'><p>OR</p></div>
        </div>
        <div id='ExpressCheckOut-ContactInfo'>
            <p>Contact information</p>
            <div id='ExpressCheckOut-ContactInfo-UserDetail'>
                <div id='ExpressCheckOut-ContactInfo-UserImage'>
                    <img src="https://cdn.shopify.com/proxy/bca536451bdec34615bffa8243f68db067c89c287b6fdc3e37be207de3fa4d17/www.gravatar.com/avatar/6771390b5fe3f4fc4d85841699528953.jpg?s=100&d=https%3A%2F%2Fcdn.shopify.com%2Fshopifycloud%2Fshopify%2Fassets%2Fno-gravatar-new-04e7c2331218ac202e79e31be502fd5631bc96cb0206580dbcb0720ebbbd7c73_100x100.png" alt="" />
                </div>
                <div id='ExpressCheckOut-ContactInfo-UserEmail'>
                    <p>Nishant Prajapati (nishant810125@gmail.com)</p>
                    <p>Log out</p>
                </div>  
            </div>
            <div id='CheckOut-NewsLetter'>
            <input type="checkbox" />
            <label htmlFor="">
             Email me with news and offers
            </label>
            </div>
        </div>
        <div id='DeliveryMethod'>
                <p>Delivery Method</p>
                <div id='DeliveryMethod-ship'>
                    <input type="radio" name='DeliveryMethod' checked={DeliveryDefault} onChange={deliveryShip}/>
                    <label htmlFor="">Ship</label>
                </div>
                <div id='DeliveryMethod-pickup'>
                    <input type="radio" name='DeliveryMethod' onChange={deliveryPickup}/>
                    <label htmlFor="">Pick Up</label>
                </div>
            </div>
        <form action="" ref={ShipDelivery}>
            <div id='ShippingAddress'>
                <p>Shipping Address</p>
                <div id='AddressOption'>
                    <select name="AddressOption" id="AddressSelection" onChange={FormInputs}>
                        <option value="">Use a new address</option>
                    </select>
                </div>
                <div id='SlectCountryOrRegion'>
                    {/* <label htmlFor="">Country/region</label> */}
                    <select name="Country_Region" id="CountrySelection" onChange={FormInputs}>
                        <option value="">Country/Region</option>
                        {/* <option value="">---------</option> */}
                        {CountryNames.map((ele)=>{
                            return (
                                <option value={ele}>{ele}</option>
                            )
                        })}
                    </select>
                </div>
                <div id='Address-Username'>
                  <div id='Address-FirstName'>
                    <label htmlFor="">First Name</label>
                    <input type="text" name='FirstName' onChange={FormInputs}/>
                  </div>
                  <div id='Address-SecondName'>
                  <label htmlFor="">Last Name</label>
                    <input type="text" name='LastName' onChange={FormInputs}/>
                  </div>
                </div>
                <div id='CompanyAddress'>
                    <input type="text" placeholder='Company (Optional)' name="CompanyAddress" onChange={FormInputs} id="" />
                </div>
                <div id='UserAddress-Street'>
                    <label htmlFor="">Address</label>
                    <input type="text" name='Street' onChange={FormInputs}/>
                </div>
                <div id='UserAddress-Suburb-PostCode'>
                    <div id='UserAddress-Suburb'>
                        <label htmlFor="">Suburb</label>
                        <input type="text" name='Suburb' onChange={FormInputs}/>
                    </div>
                    <div id='UserAddress-State'>
                        {/* <label htmlFor="">Postcode</label> */}
                        <select name="State" id="" onChange={FormInputs}>
                        {StateNames.map((ele)=>{
                            return (
                                <option value={ele}>{ele}</option>
                            )
                        })}
                        </select>
                    </div>
                    <div id='UserAddress-Postcode'>
                        <label htmlFor="">Postcode</label>
                        <input type="text" name='Postcode' onChange={FormInputs}/>
                    </div>
                </div>
                <div id='UserAddress-Phone'>
                    <label htmlFor="">Phone</label>
                    <input type="text" name='Phone' onChange={FormInputs}/>
                </div>
                <div id='OfferNewsCheckbox'>
                    <input type="Checkbox" name='OffersMail' onChange={FormInputs}/>
                    <label htmlFor="">Text me with news and offers</label>
                </div>
            </div>
            <div id='AddressFormSubmit'>
                <button id='returntocart'> <i className="fa-solid fa-angle-left"></i> Return to Cart</button>
            <button type='submit' id='ContinueToShipping' onClick={NavigateToShipping}>Continue to shipping</button>
            </div>
        </form>
        <div id='PickupAddress' ref={Pickup} hidden={true}>
            <p>Pickup locations</p>
            <div id='pickup-location'>
                <div>
                    <input type="radio" />
                </div>
                <div>
                    <p>	
                        Place order by midnight for next business day pick up between 10am - 4pm
                        10 Kiama Street, Miranda NSW
                    </p>
                </div>
                <div>
                    <p>Free</p>
                    <p>Usually ready in 4 hours</p>
                </div>
            </div>
            <div id='AddressFormSubmit'>
                <button id='returntocart'> <i className="fa-solid fa-angle-left"></i> Return to Cart</button>
                <button  id='ContinueToShipping' onClick={NavigateToShipping}>Continue to shipping</button>
            </div>
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

export default CheckoutInformation