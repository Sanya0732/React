import React from 'react'

const Product = (props) => {
  return (
    <div>
        <h2>{props.name}</h2>
        <h2>{props.price}</h2>
    </div>
    

  )
}

export default Product