import React from 'react';
import {Link} from "react-router-dom";

const Header = ({back}) => {
    return (
        <header className="header">
            <div className="width">
                {back && <Link to="/">
                    <span className="material-symbols-outlined"> arrow_back_ios
</span>
                </Link>}
                <h1>
                    <Link to="/">Cryptocurrency Tracker Application</Link>
                </h1>
            </div>
        </header>
    );
};

export default Header;