import React, { useState } from 'react'
import Product from './Product';

const Main = (props) => {

  const { products, cartItems, addItem, removeItem } = props

  return (
    <div className='col-2 block'>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id}
            product={product}
            // item={cartItems?.find(item => item.id === product.id) }
            addItem={addItem}
            removeItem={removeItem}
          />
        ))}
      </div>
    </div>
  )
}

export default Main
