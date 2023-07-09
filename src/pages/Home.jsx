import React, {useEffect} from 'react';
import homeStore from "../stores/homeStore";
import {Link} from "react-router-dom";
import Header from "../components/Header";
import CryptoList from "../components/CryptoList";

const Home = () => {

    const store = homeStore()

    useEffect(() => {
        store.fetchCoins()
    }, [])

    return (
        <div>
            <Header/>
            <header className="home-search">
                <div className="width">
                    <h2>Search for a crypto:</h2>
                    <input type="text" value={store.query} onChange={store.setQuery}/>
                </div>
            </header>
            <div className="home-cryptos">
                <div className="width">
                <h2>Trending cryptocurrencies:</h2>
                    <div className="home-crypto-list">
            {store.coins.map(coin => {
                return <CryptoList key={coin.id} coin={coin}/>
            })}
                </div>
                 </div>
            </div>
        </div>
    );
};

export default Home;