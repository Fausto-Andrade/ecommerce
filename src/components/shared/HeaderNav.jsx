import React from 'react';
import { Link } from 'react-router-dom';
import './styles/headerNav.css';

const HeaderNav = () => {
  return (
    <div className='headerNav'>
        <h1><Link to='/'>Ecommerce Final</Link></h1>
        <nav>
          <ul className='headerNav-list'>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/purchases'>Purchases</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default HeaderNav;