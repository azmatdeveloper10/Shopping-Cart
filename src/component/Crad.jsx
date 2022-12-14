import React from 'react';
import CratContext from '../Context';
import { useContext } from 'react';

const Crad = props => {
  const { data } = props;
  const { addToCart } = useContext(CratContext);

  return (
    <div
      onClick={() => addToCart(data.name, data.price, data.img)}
      className='card'
    >
      <img src={data.img} alt='Product' />
      <h3>{data.name}</h3>
      <p>{`$${data.price}`}</p>
    </div>
  );
};

export default Crad;
