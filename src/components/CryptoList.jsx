import React from 'react';
import {Link} from "react-router-dom";

const CryptoList = ({coin}) => {
    return (
        <div className="home-crypto">
            <Link to={`/${coin.id}`}>
                <span className="home-crypto-img">
                    <img src={coin.image} />
                </span>
                <span className="home-crypto-name">
                    {coin.name}
                </span>
                <span className="home-crypto-price">
                    <span>{coin.price} BTC</span>
                </span>
            </Link>
        </div>
    );
};

export default CryptoList;