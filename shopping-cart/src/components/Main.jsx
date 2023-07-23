import React from 'react'
import Product from './Product';

const Main = (props) => {
  const { products } = props // destructuring props object and get json array
  console.log(products);

  return (
    <div className='col-2 block'>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product}/>
        ))}
      </div>
    </div>
  )
}

export default Main
