import React from "react"
const Product =({props})=>{
    return (
        <tr>
            <td>{props.brand}</td>
            <td>{props.title}</td>
            <td>{props.price}</td>
            <td>Edit</td>
            <td>View</td>
            <td>Delete</td>
        </tr>
    )
}
export default Product