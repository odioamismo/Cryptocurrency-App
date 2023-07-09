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
                {coin.price && (<span className="home-crypto-price">
                    <span className="home-crypto-price-btc">
                        <img src="/newlogo_trans_sm.webp" />
                        {coin.price} BTC
                    </span>
                </span>)}
            </Link>
        </div>
    );
};

export default CryptoList;