import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [isLoading, setLoading ] = useState(true);
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }
    }

    useEffect(() => {
        getData()
    }, [])
    return { isLoading, data};    
}

export default useFetch;