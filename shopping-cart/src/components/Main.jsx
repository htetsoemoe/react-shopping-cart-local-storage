import React, { useState } from 'react'
import Product from './Product';

const Main = (props) => {

  const {products, addItem} = props

  return (
    <div className='col-2 block'>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id}
            product={product}
            addItem={addItem}
          />
        ))}
      </div>
    </div>
  )
}

export default Main
