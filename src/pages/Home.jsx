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

    const dynamicLoader = "home-search-input" + (store.loading ? " loading" : "");

    return (
        <div>
            <Header/>
            <header className="home-search">
                <div className="width">
                    <h2>Search for a crypto</h2>
                    <div className={dynamicLoader}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             width="20"
                             viewBox="0 0 512 512">
                            <path fill="currentColor" d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/>
                        </svg>
                        <input type="text" value={store.query} onChange={store.setQuery}/>
                    </div>
                </div>
            </header>
            <div className="home-cryptos">
                <div className="width">
                <h2>Trending cryptocurrencies</h2>
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