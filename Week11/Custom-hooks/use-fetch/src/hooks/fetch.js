import {useState, useEffect} from "react"

export function useFetch(url){

    console.log(url)
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);   // error state added
    
    async function getPosts()
    {
        setLoading(true)
        // const response = await fetch(url)
        // const json = await response.json()
        // setData(json)
        // setLoading(false);

        setError(null);     // reset previous error before fetch

        try {
            const response = await fetch(url);

            // Optional: handle HTTP errors (e.g., 404, 500)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const json = await response.json();
            setData(json);
            
        } catch (err) {
            // set error message
            setError(err.message || "Unknown error occurred");
        } finally {
            setLoading(false);
        }
    }

    // main fetch on mount/url change
    useEffect(()=>{
        getPosts();
    }, [url])


    // re-fetching every 10 seconds
    useEffect(()=> {
        const fetchInterval = setInterval(()=>{
            getPosts();
        }, 10*1000)


        return ()=>{
            clearInterval(fetchInterval)
        }
    }, [url])

    return {
        data,
        loading, 
        error
    }


}