import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/navbar.css'; // Corrected import statement

const Navbar = ({ size }) => {
  return (
    <nav>
      <div className='nav-box'>
        <span>DxO Shop</span>
        <div className='cart'>
          <span>
            <i className='fas fa-cart-plus'></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
