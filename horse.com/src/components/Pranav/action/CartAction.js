import React from 'react'

function CartAction(data,dispatch) {
  return (
    
          dispatch({
            type:"AddCart",
            Payload:data
          })

  )
}

export default CartAction