import React, { Fragment, useEffect, useState } from 'react';
import useGoogleSheets from 'use-google-sheets';

const GoogleSheet = () => {

    const { data, loading, error } = useGoogleSheets({
        apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
    });

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        console.log(data);
    })
    
    
    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error!</div>;
      }

      return (
        <div>
            {JSON.stringify(data)}
        </div>);
    
};

export default GoogleSheet;