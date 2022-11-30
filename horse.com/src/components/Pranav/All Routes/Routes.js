import React from 'react'
import Details_card from '../Product_details/Details_card'
import {Routes,Route } from "react-router-dom";
import Product from '../Product_Page/Product';

function AllRoutes() {
    return <>

                <Routes>
                    <Route path="/" element={<Product/>} />
                     
                    <Route path="/product/:id" element={<Details_card/>} />
                </Routes>
                 
    </>
}

export default AllRoutes