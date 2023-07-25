import { useState, useEffect } from "react";

const useFetchCards = () => {
    const [mobileData, setMobileData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    async function fetchData()
    {
        const apiData = await fetch("https://dummyjson.com/products");
        const data = await apiData.json();
        setMobileData(data.products);
    }
    return mobileData;
}

export default useFetchCards;