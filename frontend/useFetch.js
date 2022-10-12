import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useGetData = (urls) => {
    const [isLoading, setLoading ] = useState(true);
    const [data, setData] = useState([]);

    const getData = () => {
      let payload = {
        token: "VLn-lViG6erJW51Ur61s7w",
        data: {
          title: "productName",
          description: "stringCharacters|4,6",
          date: "data|ISOdate",
          zone: "addressCity",
          budget: "numberFloat",
          userAvatar: "personAvatar",
          userName: "nameFirst",
          userLastName: "nameLast",
          deadline: "data|ISOdate",
          _repeat: 5
        }
      };

      axios({
        method: "post",
        url: urls,
        data: payload
      }).then(function(resp) {
        console.log(resp)
      });
    
    }

    useEffect(() => {
        getData()
    }, [urls])
    return { isLoading, data};    
}

export default useGetData;