import React, {useEffect} from 'react';
import homeStore from "../stores/homeStore";
import {Link} from "react-router-dom";
import Header from "../components/Header";

const Home = () => {

    const store = homeStore()

    useEffect(() => {
        store.fetchCoins()
    }, [])

    return (
        <div>
            <Header/>
            <input type="text" value={store.query} onChange={store.setQuery}/>
            {store.coins.map(coin => {
                return (
                    <div key={coin.id}>
                        <Link to={`/${coin.id}`}>
                            {coin.name}
                        </Link>
                    </div>
                )
            })}
        </div>
    );
};

export default Home;