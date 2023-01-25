import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSiteContext } from '../utils/GlobalState';
import PaintingSingle from '../components/PaintingSingle';


const PaintingsPage = () => {

    return (
        <div className='flex flex-col justify-center'>
            Paintings
            <PaintingSingle></PaintingSingle>
        </div>
        
    )
};

export default PaintingsPage;