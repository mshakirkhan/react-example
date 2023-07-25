import { useState, useEffect } from "react";
const useNetworkAvailibility = () => {
    const [networkAvailibility, setNetworkAvailibility] =  useState(true);
    useEffect(() => {
        window.addEventListener("online", () => {
            setNetworkAvailibility(true);
        });
        window.addEventListener("offline", () => {
            setNetworkAvailibility(false);
        });
    }, [])
    return networkAvailibility;
}

export default useNetworkAvailibility;