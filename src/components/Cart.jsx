import React, {useContext} from 'react'
import {CartContext} from '../App'
import ProductCard from './ProductCard'

function Cart() {
  const {cart, setCart, removeHandler} = useContext(CartContext)
  return (
    <div className='sub-page'>
      <h1>Cart</h1>
      <div className="product-container">
      {cart.map((product, index) => {
        return <ProductCard product={product} isCart={true} index={index} key={index} />
      })}
      </div>
    </div>
  )
}

export default Cart