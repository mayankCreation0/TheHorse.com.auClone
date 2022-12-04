import React from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {userstatus} from '../Redux/action'
import {useNavigate} from 'react-router-dom'
const Login =()=>{
    const navigate=useNavigate();
    const init={email:"",password:""};
const [data,setData]=useState(init);
const [status,setStatus]=useState(false);
const dispatch=useDispatch();
const userstatuscheck=useSelector((state)=>{return state.authReducer.status})
console.log(userstatuscheck)
const handleInput= (e)=>{
    const {name,value}=e.target;
    setData({...data,[name]:value});
console.log(data);
  
  }
const handleClick= async()=>{
    await fetch("https://reqres.in/api/login",{
        method : 'POST',
        body : JSON.stringify(data),
        headers : {
            'Content-Type': 'application/json'
        }
    }) .then((res) => res.json())
    .then((res) => {
      console.log(res);

      setStatus(!status);
    
      dispatch(userstatus(true));
      navigate("/");
      
    });

    }

    return (
        <div>
     <input   required name="email" onInput={handleInput} type="email" />
     <input required name="password" onInput={handleInput} type="password" />
        <button onClick={handleClick}>Submit</button>
        </div>
    )
}

export default Login;
// const Login =()=>{
//     return (
//         <div>
            
//         </div>
//     )
// }