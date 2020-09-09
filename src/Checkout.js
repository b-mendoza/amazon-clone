import React from 'react';
import Subtotal from './Subtotal';
import './Checkout.css';

const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout_ad"
                    src="https://gos3.ibcdn.com/top-1568020025.jpg"
                    alt="Advertisement"
                />

                <div>
                    <h2 className="checkout__title">Your Shopping Cart</h2>
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
};

export default Checkout;
