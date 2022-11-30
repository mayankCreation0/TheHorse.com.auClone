
import React from 'react'

function SetRating(data,dispatch) {


  return (
     
    dispatch({
        type:"UpdateRating",
        Payload:data
    })
         
  )
}

export default SetRating