import React, { createContext } from 'react';

const CratContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = React.useState([]);
  const addToCart = function (name, price, img) {
    setItems(prevItems => [
      ...prevItems,
      { name: [name], price: [price], img: [img] },
    ]);
  };

  return (
    <CratContext.Provider value={{ items, addToCart }}>
      {children}
    </CratContext.Provider>
  );
}

export default CratContext;
