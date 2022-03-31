import React, {useContext} from 'react'
import {UserContext, CartContext} from '../App'

function Header() {
  const {user, setUser} = useContext(UserContext)
  const {cart, setCart} = useContext(CartContext)

  function checkContext() {
    console.log("User:", user)
    console.log("Cart:", cart)
  }
  return (
    <header>
      <button onClick={checkContext}>Check Context!</button>
      <h3>{user ? user : "Please Log In"}</h3>
    </header>
  )
}

export default Header