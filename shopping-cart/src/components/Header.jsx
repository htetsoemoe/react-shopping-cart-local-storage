import React from 'react'

const Header = () => {
  return (
    <div className='block row center'>
      <div>
        <a href="#"><h1>Shopping Cart</h1></a>
      </div>

      <div>
        <a className='Btn' href="#">Cart</a> <a className='Btn' href="#">Sign In</a>
      </div>
    </div>
  )
}

export default Header
