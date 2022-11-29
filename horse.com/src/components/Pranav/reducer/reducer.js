import React from "react";
import { myAction } from "../action/action"


const getfetchData = (url,dispatch) => {


    fetch(url).then((res) => res.json()).then((data1) => {

         
        myAction(data1, dispatch);

    });

}

let initialData = {

    ProductData: [],
    getDatafun:getfetchData
}

export const myReducer = (storeData = initialData, action) => {


    switch (action.type) {

        case "AddData":
            return {
                
                ...storeData,ProductData:action.Payload

            }


        default: {
            return storeData;
        }


    }


}