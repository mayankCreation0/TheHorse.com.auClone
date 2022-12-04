import React from "react"
import {useSelector,useDispatch} from 'react-redux'
import {userstatus} from '../Redux/action'
import { Link } from "react-router-dom"
const Navbar =()=>{
 const dispatch=useDispatch();
 const userstatuscheck=useSelector((state)=>{return state.authReducer.status})
console.log(userstatuscheck)
    return (
        <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"black",color:"white"}}>
            <Link to={"/"}><div>Home</div></Link>
            <Link to={"/login"}><div onClick={()=>dispatch(userstatus(false))}>{userstatuscheck ? "LOGOUT" : "LOGIN"}</div></Link>
            
        </div>
    )
}
export default Navbar