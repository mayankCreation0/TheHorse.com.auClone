import React from "react"
import { useEffect } from "react";
import { useSelector } from "react-redux"

import {  Outlet, useNavigate } from 'react-router-dom';
const PrivateRoutes =({children})=>{
    const navigate = useNavigate();
    const userstatuscheck=useSelector((state)=>{return state.authReducer.status})
useEffect(()=>{
   
   return userstatuscheck? <Outlet/> : navigate("/login")
},[])
 



}
export default PrivateRoutes