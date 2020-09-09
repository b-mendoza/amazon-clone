import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

import './Header.css';

const Header = () => {
    const [{ cart }] = useStateValue();

    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="Amazon Logo"
                />
            </Link>

            <div className="header__search">
                <input className="header__search-input" type="text" />
                <SearchIcon className="header__search-icon" />
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__option-line-one">Hello Guest</span>
                    <span className="header__option-line-two">Sign in</span>
                </div>
                <div className="header__option">
                    <span className="header__option-line-one">Returns</span>
                    <span className="header__option-line-two">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__option-line-one">Your</span>
                    <span className="header__option-line-two">Prime</span>
                </div>

                <Link to="/checkout" style={{ textDecoration: 'none' }}>
                    <div className="header__option-cart" title="Shopping Cart">
                        <ShoppingCartIcon className="header__cart-icon" />
                        <span className="header__option-line-two header__cart-count">
                            {cart?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;
