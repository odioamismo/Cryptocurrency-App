import { create } from 'zustand';

const showStore = create((set) => ({
    rechData: [],

    fetchData: (id) => {
        const url1 = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=28`;
        const url2 = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`;

        fetch(url1)
            .then((response1) => {
                if (response1.ok) {
                    return response1.json();
                } else {
                    console.error("Request failed")
                }
            })

            .then((data1) => {
                fetch(url2)
                    .then((response2) => {
                        if (response2.ok) {
                            return response2.json();
                        } else {
                            console.error("Request failed")
                        }
                    })
                    .then((data2) => {
                        const rechData = data1.prices.map((price) => {
                            const [timestamp, prc] = price;
                            const date = new Date(timestamp).toLocaleDateString('en-us');
                            return {
                                Date: date,
                                Price: prc,
                            };
                        });

                        console.log(data2);

                        set({ rechData });
                    })
                    .catch((error) => {
                        console.error('Wystąpił błąd:', error);
                    });
            })
            .catch((error) => {
            console.error('Wystąpił błąd:', error);
        });
    }
}));

export default showStore;