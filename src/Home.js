import React from 'react';
import Product from './Product';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src={
                        `https://images-na.ssl-images-amazon.com/images/G/01/` +
                        `adlp/builder/BFF-V1-01-Hero-D-5ff78a97-f4d3-4242-9344` +
                        `-c1f478aff592._CB428091778_QL85_V1_.jpg`
                    }
                    alt="Amazon Prime Banner"
                />

                <div className="home__row">
                    <Product
                        id={96581202}
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                        imageUrl="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                        price={29.99}
                        rating={3}
                    />
                    <Product
                        id={90931521}
                        title="Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Dough Hook, Wire Whip & Beater (6.5QT, Blue)"
                        imageUrl="https://images-na.ssl-images-amazon.com/images/I/61aT8jl8THL._AC_SL1001_.jpg"
                        price={118.99}
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id={73122742}
                        title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
                        imageUrl="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_SL1000_.jpg"
                        price={49.99}
                        rating={5}
                    />
                    <Product
                        id={14457453}
                        title="Apple iPhone 11 Pro Max (64GB, Midnight Green) + Carrier Subscription"
                        imageUrl="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-11-Pro-Max/Midnight-Green/Apple-iPhone-11-Pro-Max-Midnight-Green-frontimage.jpg"
                        price={1778.0}
                        rating={5}
                    />
                    <Product
                        id={41905181}
                        title="Samsung Galaxy Watch Active2 (40mm, GPS, Bluetooth), Silver (US Version)"
                        imageUrl="https://images-na.ssl-images-amazon.com/images/I/51bSW9gjoaL._AC_SL1024_.jpg"
                        price={229.0}
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id={41905181}
                        title="Samsung CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz, USB-C, HDMI, DisplayPort, 3-Year Warranty (C49J890DKN)"
                        imageUrl="https://images-na.ssl-images-amazon.com/images/I/61Hh-0F7AbL._AC_SL1000_.jpg"
                        price={430.99}
                        rating={5}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
