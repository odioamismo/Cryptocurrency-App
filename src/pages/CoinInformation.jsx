import React, {useEffect} from 'react';
import showStore from "../stores/showStore";
import {useParams} from "react-router-dom";

const CoinInformation = () => {
    const store = showStore()
    const params = useParams()

    useEffect(() => {
        store.fetchData(params.id)
    },[])

    return (
        <div>
            CoinInformation
        </div>
    );
};

export default CoinInformation;