import React, { Fragment, useEffect } from 'react';
import { useSiteContext } from '../../utils/GlobalState';

const PaintingSingle = ({title, materials, dimensions, created_date, url }) => {

    if (!url) {
        return (
            <div className=' hidden'></div>
    )};

    return (
        <div className='p-5 h-fit'>
            <img className=' object-cover' src={url}></img>
            <p>{title}</p>
        </div>
    )
};

export default PaintingSingle;