import React from "react";
import { myAction } from "../action/action"


const getfetchData = (url,dispatch) => {


    fetch(url).then((res) => res.json()).then((data1) => {

         
        myAction(data1, dispatch);

    });

}

let initialData = {

    ProductData: [],
    getDatafun:getfetchData,
    cartData:[],
    ProductDetail:{},
    rating:4.2
}

export const myReducer = (storeData = initialData, action) => {

 
    switch (action.type) {

        case "AddData":
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
        case "AddCart":
        return{
            ...storeData,cartData:[...storeData.cartData,action.Payload]
        }


        default: {
            return storeData;
        }


    }


}