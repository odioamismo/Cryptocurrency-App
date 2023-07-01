export const homeStore = {
    fetchCoins: () => {
        fetch("https://api.coingecko.com/api/v3/search/trending")
            .then((response) => {
                if (!response.ok) {
                    return console.error("Request failed")
                } else {
                    return response.json()
                }
            }).then(data => {
                console.log(data)
        })
            .catch(err => {
                console.error(err)
            })
    }
}
