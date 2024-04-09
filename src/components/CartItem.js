// CartItem.js
import React from 'react';

const CartItem = ({ product, onRemove }) => {
  const { id, name, price, image, quantity } = product;

  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <div className="cart-item">
      <img src={image} alt={name} style={{ width: '20%' }} />
      <div className="info">
        <div className="name">{name}</div>
        <div className="price">Price: ${price}</div>
        <div>Quantity: {quantity}</div>
        <div>Total: ${(price * quantity).toFixed(2)}</div>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
