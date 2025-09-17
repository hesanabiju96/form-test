import { useEffect, useState } from "react";

export const useFetch = () => {
    const URL = "https://fakestoreapi.com/products";
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                setLoading(true);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const json = await response.json();
                setData(json);
            } catch (error) {
                throw new Error("Failed to fetch data");
            } finally {
                setLoading(false);
            }
        }

        fetchData()

    }, []);

    return { data, loading };

}