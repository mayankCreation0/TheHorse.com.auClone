import React from "react"
import { useEffect } from "react";
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import {  Outlet, useNavigate } from 'react-router-dom';
const PrivateRoutes =({children})=>{
    const navigate = useNavigate();
    const userstatuscheck=useSelector((state)=>{return state.authReducer.status})
useEffect(()=>{
    if(!userstatuscheck){
        navigate("/login")
    }
},[])
 

return
<div>
 <Outlet/> 
 </div>
}
export default PrivateRoutes