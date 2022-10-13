import React, { useState, useEffect } from 'react';


const useGetData = (urls) => {
    const [isLoading, setLoading ] = useState(true);
    const [data, setData] = useState([]);

    const getData = async () => {
      const response = await fetch(urls);
      const resultData = await response.JSON();
      setData(resultData);
      setLoading(false);
    }

    useEffect(() => {
        getData()
    }, [urls])
    return { isLoading, data};    
}

export default useGetData;