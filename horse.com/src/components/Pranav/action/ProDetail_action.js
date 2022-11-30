import React from 'react'

function proDetail_action(data,dispatch) {
  return (
          dispatch({
            type:"ProDetails",
            Payload:data
          })
  )
}

export default proDetail_action;