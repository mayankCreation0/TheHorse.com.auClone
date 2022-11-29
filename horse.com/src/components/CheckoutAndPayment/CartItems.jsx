import React from 'react'

function CartItems() {
  return (
    <div id='Checkout-CartDetails'>
        <div className="Checkout-AddedCartItems">
          <div className="Checkout-Cart-Product-Image"><img src="https://cdn.shopify.com/s/files/1/0233/5133/products/20220906_THEHORSE_TCT_151_small.jpg?v=1663023568" alt="" /></div>
          <div className="Checkout-CartItem-Desc">
            <p>The Travel Wallet: Tan</p>
            <p> CYBER (-$41.99)</p>
          </div>
          <div className='Checkout-CartItem-Price'>
            <p>$139.95</p>
            <p>$97.96</p>
          </div>
        </div>
        <hr />
    </div>
  )
}

export default CartItems