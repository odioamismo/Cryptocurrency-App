import { create } from 'zustand';

const homeStore = create((set) => ({
    coins: [],

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
                set({ coins });
                console.log(coins);
            })
            .catch((err) => {
                console.error(err);
            });
    }
}));

export default homeStore;
