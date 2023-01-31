import React, { Fragment, useEffect, useState } from 'react';
import useGoogleSheets from 'use-google-sheets';
import { useSiteContext } from '../../utils/GlobalState';
import { GET_DATA_FROM_DB } from '../../utils/actions';

const GoogleSheet = () => {

  const [state, dispatch] = useSiteContext();
  const { data, loading, error } = useGoogleSheets({
      apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
      sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
  });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if(!loading) {
      returnPicData((data[0].data));
    }
  }, [data]);

  function returnPicData(data) {
    console.log(data);
    // var mappedData = convertArrayToMap(data);
    dispatch({ type: GET_DATA_FROM_DB, new_pic_data : data})
    // console.log(mappedData);
    setLoading(false);
  }

  // function convertArrayToMap(data) {
  //   console.log(data[0])
    

  //   return mappedData;
  // }
  
  if (loading && isLoading) {
      return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error!</div>;
  }

  return (
    <div className=''>
        
    </div>);
    
};

export default GoogleSheet;