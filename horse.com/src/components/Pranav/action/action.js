import React from "react";


export const myAction = (data, dispatch) =>{


    dispatch({

        type: "AddData",
        Payload: data

    })


}