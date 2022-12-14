import React from 'react';
import { AiFillShopping } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import CratContext from '../Context';
import { useContext } from 'react';

const Nav = () => {
  const { items } = useContext(CratContext);

  return (
    <nav className='nav'>
      <Link className='link' to={'./Product'}>
        <h1>Product</h1>
      </Link>
      <p className='cart-icon'>
        <Link className='link' to={'./CartProduc'}>
          <AiFillShopping className='icon' />
        </Link>
        {items.length}
      </p>
    </nav>
  );
};

export default Nav;
