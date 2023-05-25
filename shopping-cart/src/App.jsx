import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Cart from './components/Cart'

const App = () => {
  return (
    <div>
      <p>Shopping Cart with Local Storage</p>
      <Header />
      <div className="">
        <Main />
        <Cart />
      </div>
    </div>
  )
}

export default App
