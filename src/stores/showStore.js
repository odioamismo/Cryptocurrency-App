import { create } from 'zustand';

const showStore = create((set) => ({
    rechData: [],
    data: null,

    fetchData: (id) => {
        const rechartsUrl = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=28`;
        const detailsUrl = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`;

        fetch(rechartsUrl)
            .then((response) => {
                if (!response.ok) {
                    console.error('Error while fetching market_chart');
                }
                return response.json();
            })
            .then((rechRes) => {
                const rechData = rechRes.prices.map((price) => {
                    const [timestamp, prc] = price;
                    const date = new Date(timestamp).toLocaleDateString('en-us');
                    return {
                        Date: date,
                        Price: prc,
                    };
                });
                set({ rechData });
            })
            .catch((error) => {
                console.error(error);
            });

        fetch(detailsUrl)
            .then((response) => {
                if (!response.ok) {
                    console.error('Error while fetching coin data');
                }
                return response.json();
            })
            .then((dataRes) => {
                set({ data: dataRes });
            })
            .catch((error) => {
                console.error(error);
            });
    },
}));

export default showStore;
