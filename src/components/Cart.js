// Cart.js
import React from 'react';
import CartItem from './CartItem';


const Cart = ({ cartItems, onRemove }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} product={item} onRemove={onRemove} />
      ))}
      <div className="total">Total (in cart): ${getTotalPrice().toFixed(2)}</div>
    </div>
  );
};

export default Cart;
