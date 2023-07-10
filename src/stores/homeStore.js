import { create } from 'zustand';
import {debounce} from "../scriptHelper/debounce";

const homeStore = create((set) => ({
    coins: [],
    query: "",
    trending: [],
    loading: false,

    fetchCoins: () => {
        fetch("https://api.coingecko.com/api/v3/search/trending")
            .then((response) => {
                if (!response.ok) {
                    console.error("Request failed");
                    return;
                }
                return response.json();
            })
            .then((data) => {
                const coins = data.coins.map((coin) => ({
                    name: coin.item.name,
                    image: coin.item.large,
                    id: coin.item.id,
                    price: coin.item.price_btc,
                    symbol: coin.item.symbol
                }));
                set({ coins, trending: coins });
                // console.log(coins);
            })
            .catch((err) => {
                console.error(err);
            });
    },

    setQuery: (event) => {
        set({ query: event.target.value });
        homeStore.getState().coinSearcher();
    },

    coinSearcher: debounce (() => {
        const { query, trending } = homeStore.getState();
        set({loading: true})
        if (query.length > 2) {
            fetch(`https://api.coingecko.com/api/v3/search?query=${query}`)
                .then((response) => {
                    if (!response.ok) {
                        console.error("Request failed");
                        return;
                    }
                    return response.json();
                })
                .then((data) => {
                    const coins = data.coins.map((coin) => ({
                        name: coin.name,
                        image: coin.large,
                        id: coin.id
                    }));
                    set({ coins, loading: false });
                })
                .catch((err) => {
                    console.error(err);
                });
        } else {
            set({ coins: trending, loading: false });
        }
    }, 500)
}));

export default homeStore;
