import React from 'react'
import './MobileList.css'

export default function MobileList(props) {
    const {image,title,price} = props;
  return (
    <div className='main'>
        {console.log(props.image)}
      <img className='image' src={image}/>
      <div>
      <h2> {title}</h2>
      <p> {price}</p>
      <button> Add to cart </button>
      </div>
      
    </div>
  )
}
