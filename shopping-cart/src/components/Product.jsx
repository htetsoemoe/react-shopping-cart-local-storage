import React from 'react'

const Product = (props) => {
  const { product, addItem} = props // get single product object as props

  return (
    <div className='card'>
      <img src={product.image} alt={product.name} className="small" />
      <h3>{product.name}</h3>
      <div>${product.price}</div>

      <div>
        <button onClick={() => addItem(product)}>Add To Cart</button>
      </div>
    </div>
  )
}

export default Product
