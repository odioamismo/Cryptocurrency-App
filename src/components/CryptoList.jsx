import React from 'react';
import {Link} from "react-router-dom";

const CryptoList = ({coin}) => {
    return (
        <div>
            <Link to={`/${coin.id}`}>
                {coin.name}
            </Link>
        </div>
    );
};

export default CryptoList;