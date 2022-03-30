import React from 'react'
import Cart from './Cart'
import Login from './Login'
import Products from './Products'

function Main() {
  return (
    <div className='main-container'>
      <Login />
      <Cart />
      <Products />
    </div>
  )
}

export default Main