import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Cart from './components/Cart'
import products from './data'

const App = () => {
  const [cartItems, setCartItems] = useState([])

  const addItem = (product) => {
    // Check product is already exist in cart
    const exist = cartItems?.find(item => item.id === product.id)

    if (exist) {
      setCartItems(
        cartItems.map(item => item.id === product.id ? {...exist, qty: exist.qty + 1} : item)
      )
    } else {
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  }

  const removeItem = (product) => {
    const exist = cartItems.find(item => item.id === product.id)

    if (exist.qty === 1) {
      const newCartItems = cartItems.find(item => item.id !== product.id)
      setCartItems(newCartItems)
    } else {
      const newCartItems = cartItems.map(item => 
        item.id === product.id ? {...exist, qty: exist.qty - 1} : item
      )
      setCartItems(newCartItems)
    }

  }
  return (
    <div>
      <Header countCartItems = {cartItems?.length}/>
      <div className="row">
        <Main cartItems={cartItems} products={products} addItem={addItem} removeItem={removeItem}/>
        <Cart />
      </div>
    </div>
  )
}

export default App
