import React, { Fragment, useEffect, useState } from 'react';

const sheet_id = require(process.env.REACT_APP_GOOGLE_SHEETS_DOC_ID);
const api_key = require(process.env.REACT_APP_GOOGLE_SHEETS_API_KEY);
const { GoogleSpreadsheet } = require('google-spreadsheet');

const doc = new GoogleSpreadsheet(sheet_id);

const GoogleSheet = () => {

    const [isLoading, setLoading] = useState(true);
    
    useEffect(() => {
        console.log(sheet_id);
        console.log(api_key);
        loadFromDB();
    }, [isLoading]);
    
    async function loadFromDB() {
        await doc.useApiKey(api_key);
        
        await doc.loadInfo()
            .then(() => {
                console.log(doc.title);
                setLoading(false);
            })
        
    };
    
};

export default GoogleSheet;