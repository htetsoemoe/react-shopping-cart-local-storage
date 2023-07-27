import React, { useDeferredValue, useEffect, useState, useTransition } from 'react'
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
      const newCartItems = cartItems.map(item => item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item)
      setCartItems(newCartItems)
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }]
      setCartItems(newCartItems)
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    }
  }

  const removeItem = (product) => {
    
    const exist = cartItems.find(item => item.id === product.id)

    if (exist.qty === 1) {
      const newCartItems = cartItems?.find(item => item.id !== product.id)
      setCartItems(newCartItems)
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    } else {
      const newCartItems = cartItems?.map(item =>
        item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
      )
      setCartItems(newCartItems)
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    }
  }

  // useTransition()
  const [isPending, startTransition] = useTransition()

  // get cartItems from localStorage when this component was mounted (DidMounted Stage)
  useEffect(() => {
    startTransition(() => {
      setCartItems(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])
    })
  }, [])

  const cartItemsCount = useDeferredValue(cartItems?.length)


  return isPending ? (
    <div>Loading...</div>
  ) : (
    <div>
      <Header countCartItems={cartItemsCount} />
      <div className="row">
        <Main cartItems={cartItems} products={products} addItem={addItem} removeItem={removeItem} />
        <Cart cartItems={cartItems} addItem={addItem} removeItem={removeItem} />
      </div>
    </div>
  )
}

export default App
