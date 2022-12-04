import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import { NavLink,Link } from "react-router-dom";
import Table from 'react-bootstrap/esm/Table';
// import CloseButton from 'react-bootstrap/CloseButton';
import {ADD, REMOVE, DLT} from "../Action/action";
import {useDispatch} from  'react-redux'
import CartAction from "../../Pranav/action/CartAction";
// import { Link } from "react-router-dom";

export default function Cart() {

    const dispatch=useDispatch();

    useEffect(()=>{

          fetch("http://localhost:3001/cartPage").then((res)=>res.json()).then((data)=>{

          console.log(data);

            CartAction(data,dispatch);

          })        

    },[]);

   let getdata=useSelector((state)=>state.carts);
     


   

    const [price,setPrice] = useState(0);


    const send = (e)=>{
        // console.log(e);
        dispatch(ADD(e));
      }

      const dlt = (id)=>{
        console.log(id);

        fetch(`http://localhost:3001/cartPage/${id}`, { method: 'DELETE' })
       .then((res) =>{

        if(res.ok)
        {
            dispatch(DLT(id));
        }
        
       });

        
        
    }

    
      const remove = (item)=>{
        dispatch(REMOVE(item))
      }

      const total = ()=>{
        let price = 0;
        getdata.map((e,k)=>{
            price = e.price * e.quantity + price
        });
        setPrice(price);
    };

    useEffect(()=>{
        total();
    },[total])
      
    
    console.log(getdata);

    return (
        <>
            <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
            >
                <header>
                    <h3 class="offcanvas-title" id="offcanvasRightLabel">
                        Your Bag
                    </h3>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </header>

                <div className="offcanvas-body"  style={{overflowx:"hidden"}}>
                    <div className='card_details' style={{ width: "25rem", padding: 10, minHeight:"250px",maxHeight:"400px" }}>
                        <Table>
                            <tbody>
                                
                                {
                                getdata.length>0?getdata.map((e) => {
                                        return (
                                            <>
                                                <tr height="120px">
                                                    <td>
                                                        <NavLink to={`/cart/${e.id}`}>
                                                            <img src={e.img1} style={{ width: "5rem", height: "5rem" }} alt="" />
                                                        </NavLink>
                                                    </td>
                                                    <td >
                                                        <p className="cart-title">{e.title}</p>
                                            
                                                        <p className="cart-price" style={{marginTop:"34px"}}>CHF {e.price}</p>
 <p className="g-gift-wrap"><img src="https://cdn-icons-png.flaticon.com/128/3618/3618068.png" width="15px" alt="" />          Gift Wrap Me</p>
                                                        
                                                         </td>

                                                    <td className='mt-3' style={{ cursor: "pointer"}}>
                                                        <div onClick={()=>dlt(e.id)}>
                                                        <img src="https://cdn-icons-png.flaticon.com/128/864/864393.png" width="10px" alt="" />
                                                        </div>
                                                   <br />
                                                        <div className='mt-1 d-flex justify-content-between align-items-center' id="cart-q-button" >
                    <span style={{fontSize:"13px"}} onClick={e.quantity <=1 ? ()=>dlt(e.id) : ()=>remove(e)} >-</span>
                    <span style={{fontSize:"13px"}}>{e.quantity}</span>
                    <span style={{fontSize:"13px"}} onClick={()=>send(e)} >+</span>

                    </div>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    }): <div className="g-empty-cart">Your cart is empty!
                                    
                                    <div><img src="https://cdni.iconscout.com/illustration/free/thumb/empty-cart-4085814-3385483.png" width="200px" alt="" /></div>
                                    </div>
                                }

                            </tbody>
                        </Table>
                     
                    </div>
                  
                   <div className="checkout-wrapper">
                    <div class="g-subtotal-div">
                        <div>Subtotal (
                      {getdata.length} Item)</div>
                         
                        <div>CHF  {price.toFixed(2)}</div>
                    </div>
                    <br />
    <Link to="/checkout"><div className="g-checkout-btn"><a><span>Checkout</span></a></div></Link>

                   </div>
                </div>
            </div>
        </>
    );
}


