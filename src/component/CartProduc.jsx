import React from 'react';
import CratContext from '../Context';
import { useContext } from 'react';
const CartProduc = () => {
  const { items } = useContext(CratContext);
  const priceArr = [];
  items.forEach(element => priceArr.push(...element.price));

  return (
    <div>
      <div className='card card-cont'>
        {items.map((item, index) => (
          <div key={`${item.img}${index}`}>
            <img src={item.img} alt='Product' />
            <h3>{item.name}</h3>
            <p>{`$${item.price}`}</p>
          </div>
        ))}
      </div>

      <div className='total'>
        <h2>Total Items: {items.length}</h2>
        <h2>Total Price: ${priceArr.reduce((cur, ecu) => cur + ecu)}</h2>
      </div>
    </div>
  );
};

export default CartProduc;
