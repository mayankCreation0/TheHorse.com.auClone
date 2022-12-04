import React, { useState } from "react"
import { useEffect } from "react"
import Product from "./Product";
import {useDispatch,useSelector} from 'react-redux'
import {storedata} from '../Redux/action'
const HomePage =()=>{
    const [data,setData] =useState([]);
    const productData=useSelector((state)=>{return state.productReducer.data});
    console.log(productData);
    const dispatch=useDispatch();
    useEffect(()=>{
          fetchData("http://localhost:3002/products");
    },[])
    const fetchData= async(url)=>{
      try{
        const res=await fetch(url);
      const result= await res.json();
      console.log(result);
      setData(result)
      dispatch(storedata(result));
      
      }catch(e){
        console.log(e);
      }
    
    }
    return (
        <div>
           <table>
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Title</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
            data.map(e=><Product props={e} />)
           
            }
            </tbody>
           </table>
        </div>
    )
}
export default HomePage