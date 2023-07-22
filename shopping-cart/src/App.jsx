import React from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Cart from './components/Cart'

const App = () => {
  return (
    <div>
      <Header />
      <div className="row">
        <Main />
        <Cart />
      </div>
    </div>
  )
}

export default App
