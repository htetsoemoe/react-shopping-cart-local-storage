import React from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Cart from './components/Cart'
import products from './data'

const App = () => {
  return (
    <div>
      <Header />
      <div className="row">
        <Main products={products}/>
        <Cart />
      </div>
    </div>
  )
}

export default App
