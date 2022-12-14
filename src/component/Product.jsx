import React from 'react';
import data from '../Data';
import Crad from './Crad';

const Product = () => {
  return (
    <div className='card-cont'>
      {data.map((data, index) => (
        <Crad key={`${data.img}-${index}`} data={data} />
      ))}
    </div>
  );
};

export default Product;
