import React from 'react';
import PropTypes from 'prop-types';

import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStateValue } from './StateProvider';

import './Product.css';

const Product = ({ id, title, imageUrl, price, rating }) => {
    const [, dispatch] = useStateValue();

    // despacha acciones al "data layer"
    const addToCart = () => {
        // despacha el item al "data layer"
        dispatch({
            type: 'ADD_TO_CART',
            item: { id, title, imageUrl, price, rating },
        });
    };

    return (
        <div className="product">
            <img className="product__image" src={imageUrl} alt="Product" />

            <div className="product__info">
                <p className="product__name">{title}</p>

                <p className="product__price">
                    <small>$</small>
                    <strong>{price} USD</strong>
                </p>

                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarBorderIcon className="product_rating-star" />
                        ))}
                </div>

                <button type="submit" onClick={addToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

Product.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
};

export default Product;
