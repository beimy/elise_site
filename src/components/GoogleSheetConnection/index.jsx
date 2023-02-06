import React, { Fragment, useEffect, useState } from 'react';
import useGoogleSheets from 'use-google-sheets';
import { useSiteContext } from '../../utils/GlobalState';
import { GET_DATA_FROM_DB, GET_DRAWINGS_FROM_DB } from '../../utils/actions';

const GoogleSheet = () => {

  const [state, dispatch] = useSiteContext();
  const { data, loading, error } = useGoogleSheets({
      apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
      sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
  });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if(!loading) {
      returnPicData((data));
    }
  }, [data]);

  function returnPicData(data) {
    console.log(data);
    const cleanPaintingData = imageValidation(data[0].data);
    const cleanDrawingData = imageValidation(data[1].data);
    dispatch({ type: GET_DATA_FROM_DB, new_pic_data : cleanPaintingData});
    dispatch({ type: GET_DRAWINGS_FROM_DB, new_drawing_data : cleanDrawingData});
    setLoading(false);
  }

  function imageValidation(dataToValidate) {
    console.log(dataToValidate.length);
    var returnData = dataToValidate;
    dataToValidate.forEach((curr, index) => {
      if (!curr.url) {
        returnData.splice(index, 1);
       }
    })
    return returnData;
  }

  
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