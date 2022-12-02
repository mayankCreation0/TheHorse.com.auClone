import React from 'react'

function WishListAction(data,dispatch) {
  return (
    
    dispatch({
        type:"AddWishList",
        Payload:data
    })

  )
}

export default WishListAction