import React from 'react';
import '../styles/Card.css'; // Ensure the correct path to the CSS file

const Card = ({ item, handleClick }) => {
  return (
    <div className='cards'>
      <div className='image-box'>
        <img src={item.img} alt={item.title} />
      </div>
      <div className='details'>
        <p className='title'>{item.title}</p>
        <p className='author'>{item.author}</p>
        <p className='price'>Price - {item.price} Rs</p>
        <button className='add-to-cart' onClick={() => handleClick(item)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Card;
