import React from 'react';
import {Link} from "react-router-dom";

const CryptoList = ({coin}) => { // The "coin" prop is in Home.jsx
    // This component renders a single cryptocurrency item in the home page list
    return (
        <div className="home-crypto">
            <Link to={`/${coin.id}`}>
                <span className="home-crypto-img">
                    <img src={coin.image} alt="coin-image" />
                </span>
                <span className="home-crypto-name">
                    {coin.name}
                </span>
                {coin.price && (<span className="home-crypto-price">
                    <span className="home-crypto-price-btc">
                        <img src="/newlogo_trans_sm.webp" alt="btc-image" />
                        {coin.price} BTC
                    </span>
                </span>)}
            </Link>
        </div>
    );
};

export default CryptoList;