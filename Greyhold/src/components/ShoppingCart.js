import React, { useState } from 'react';
import { calculateTotal } from '../utils/shopFunctions';

const ShoppingCart = ({ cartItems, setCartItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCart = () => {
        setIsOpen(!isOpen);
    };

    const removeItem = (itemToRemove) => {
        setCartItems(cartItems.filter(item => item.id !== itemToRemove.id));
    };

    return (
        <div className={`shopping-cart ${isOpen ? 'open' : ''}`}>
            <button onClick={toggleCart} className="cart-toggle">
                {isOpen ? 'Close Cart' : 'Open Cart'}
            </button>
            {isOpen && (
                <div className="cart-content">
                    <h2>Your Shopping Cart</h2>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <ul>
                            {cartItems.map(item => (
                                <li key={item.id}>
                                    <div className="cart-item">
                                        <img src={item.image} alt={item.name} />
                                        <div className="item-details">
                                            <h3>{item.name}</h3>
                                            <p>Price: ${item.price.toFixed(2)}</p>
                                            <button onClick={() => removeItem(item)}>Remove</button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                    <h3>Total: ${calculateTotal(cartItems).toFixed(2)}</h3>
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;