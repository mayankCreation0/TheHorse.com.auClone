import React from 'react'

import { Route, Routes } from "react-router-dom";
import Homepage from '../mayankFolder/homepage/Homepage';
import Details_card from '../Pranav/Product_details/Details_card';
import Product from '../Pranav/Product_Page/Product';
import Checkout from '../CheckoutAndPayment/Checkout';
import CheckoutInformation from '../CheckoutAndPayment/CheckoutInformation';
import Shipping from '../CheckoutAndPayment/Shipping';
import Payment from '../CheckoutAndPayment/Payment';
import Redirect from '../CheckoutAndPayment/Redirect'
import PaymentProcessing from '../CheckoutAndPayment/PaymentProcessing';
import PaymentGateway from '../CheckoutAndPayment/PaymentGateway';
import OrderConfirmation from '../CheckoutAndPayment/OrderConfirmation';
import { Navigate } from 'react-router-dom';


function AllRoutes() {




    return (


        <Routes>

            <Route path="/" element={<Homepage />} />
            {/* <Route path="/account" element={<Appaccount />} /> */}
            <Route path="/products/:category" element={<Product />} />
            <Route path="/product/:id" element={<Details_card />} />

            <Route path='/checkout' element={<Checkout />}>
                <Route path='' element={<Navigate to="information" />} />
                <Route path='information' element={<CheckoutInformation />} />
                <Route path='shipping' element={<Shipping />} />
                <Route path='payment' element={<Payment />} />
            </Route>
            <Route path='/redirect' element={<Redirect />} />
            <Route path='/paymentprocessing' element={<PaymentProcessing />} />
            <Route path='/paymentgateway' element={<PaymentGateway />} />
            <Route path='orderconfirmation' element={<OrderConfirmation />} />

        </Routes>


    )
}

export default AllRoutes