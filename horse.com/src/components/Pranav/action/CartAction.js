import React from 'react'

function CartAction(data,dispatch) {
  return (
    
          dispatch({
            type:"Add_Cart",
            Payload:data
          })

  )
}

export default CartAction