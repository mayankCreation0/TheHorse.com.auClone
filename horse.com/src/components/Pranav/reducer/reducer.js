import React from "react";
import { myAction } from "../action/action"


const getfetchData = (url,dispatch) => {


    fetch(url).then((res) => res.json()).then((data1) => {

         
        myAction(data1, dispatch);

    });

}

let initialData = {

    ProductData:[],
     
    getDatafun:getfetchData,
    carts:[],
    ProductDetail:{},
    rating:4.2,
    WishList:[]
    
}

export const myReducer = (storeData = initialData, action) => {

    

 
    switch (action.type) {

        case "AddData":

        action.Payload.map((ele)=>{
             storeData.ProductData.push(ele)
        })

        
            return {
                
                ...storeData,ProductData:action.Payload

            }
            

        case "ProDetails":
            return{
                ...storeData,ProductDetail:action.Payload
            }
        case "UpdateRating":
            return{
                ...storeData,rating:action.Payload
            }
        // case "AddCart":
        // return{
        //     ...storeData,cartData:action.Payload
        // }
        case "AddWishList":
            return{
                ...storeData,WishList:action.Payload
            }

            case "Add_Cart":
                return{
                    ...storeData,carts:action.Payload
                }

            case "ADD_CART":
                
    
      const IteamIndex = storeData.carts.findIndex((item)=> item.id === action.payload.id);

      if(IteamIndex >= 0){
          storeData.carts[IteamIndex].quantity +=1
          return {
              ...storeData,
              carts:[...storeData.carts]
          }
      }else{
          const temp = {...action.payload,quantity:action.payload.quantity}
           return {
              ...storeData,
              carts: [...storeData.carts, temp]
          }
      }



      case "RMV_CART":
        const data = storeData.carts.filter((el)=>el.id !== action.payload); 
        // console.log(data);

        return {
            ...storeData,
            carts:data
        }

    case "RMV_ONE":
        const IteamIndex_dec = storeData.carts.findIndex((iteam)=> iteam.id === action.payload.id);

        if(storeData.carts[IteamIndex_dec].quantity >= 1){
            const dltiteams = storeData.carts[IteamIndex_dec].quantity -= 1
            console.log([...storeData.carts,dltiteams]);

            return {
                ...storeData,
                carts:[...storeData.carts]
            }
        }else if(storeData.carts[IteamIndex_dec].quantity === 1 ){
            const data = storeData.carts.filter((el)=>el.id !== action.payload);

            return {
                ...storeData,
                carts:data
            }
        }



        default: {
            return storeData;
        }


    }


}