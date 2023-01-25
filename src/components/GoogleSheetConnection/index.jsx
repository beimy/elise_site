import React, { Fragment, useEffect, useState } from 'react';
import useGoogleSheets from 'use-google-sheets';
import { useSiteContext } from '../../utils/GlobalState';
import { GET_DATA_FROM_DB } from '../../utils/actions';

const GoogleSheet = () => {

    const { data, loading, error } = useGoogleSheets({
        apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
    });

    const [state, dispatch] = useSiteContext();

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
      dispatch({type: GET_DATA_FROM_DB, new_pic_data : data})
      console.log("Data received:" + JSON.stringify(data));
      console.log("Data in passed to state" + state.pic_data[0])
    }, [data]);
    
    
    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
      return <div>Error!</div>;
    }

    return (
      <div className=' '>
          {JSON.stringify(data)}
      </div>);
    
};

export default GoogleSheet;