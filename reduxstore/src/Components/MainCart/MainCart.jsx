import React from 'react'
import { useSelector } from 'react-redux'

const MainCart = () => {
    const cartState = useSelector(state => state.cart)
  return (
    <main>
        {cartState.goods.length == 0 ? <p>Cart is empty</p> : <p>13</p>}
    </main>
  )
}

export default MainCart