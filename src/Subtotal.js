import React from 'react';

import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

import './Subtotal.css';

const Subtotal = () => {
    const [{ cart }] = useStateValue();

    const cartTotal = cart.reduce(
        (currentTotal, item) => item.price + currentTotal,
        0
    );

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={value => (
                    <>
                        <p className="subtotal__items">
                            Subtotal ({cart?.length} items):{' '}
                            <strong>{value}</strong>
                        </p>

                        <small className="subtotal__gift">
                            <input type="checkbox" id="checkbox-gift" />
                            <label htmlFor="checkbox-gift">
                                This order contains a gift
                            </label>
                        </small>
                    </>
                )}
                decimalScale={2}
                value={cartTotal}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />

            <button type="submit">Preceed to Checkout</button>
        </div>
    );
};

export default Subtotal;
