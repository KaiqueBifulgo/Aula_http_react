import { useState, useEffect } from "react";


// CUSTOM HOOK
export const useFetch = (url) => {
 
    const [data, setData] = useState(null);


    // LOADING
    const [loading, setLoading] = useState(false);

    // ERROR
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {

            try {
                 // LOADING
            setLoading(true);

            const res = await fetch(url);
            const json = await res.json();

            setLoading(false);

            setData(json);
            } catch (error) {

                setError("Houve algum erro")

            }
           
        }

        fetchData();
    }, [url])

    return{data, loading, error};

}