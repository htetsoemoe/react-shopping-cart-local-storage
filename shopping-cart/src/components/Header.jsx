import React from 'react'

const Header = (props) => {
  return (
    <div className='block row center'>
      <div>
        <a href="#"><h1>Shopping Cart</h1></a>
      </div>

      <div>
        <a className='Btn' href="#">
          Cart {props.countCartItems ? (<button className='badge'>{props.countCartItems}</button>) : ('')}
        </a> 
          <a className='Btn' href="#">Sign In</a>
      </div>
    </div>
  )
}

export default Header
