import { create } from 'zustand';
import axios from "axios";

const showStore = create((set) => ({
    fetchData: (id) => {
        fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=28`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.error("Request failed");
                }
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}));

export default showStore;