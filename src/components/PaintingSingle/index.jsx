import React, { Fragment, useEffect } from 'react';
import { useSiteContext } from '../../utils/GlobalState';

const PaintingSingle = ({title, description, created_date, url }) => {

    return (
        <div>
            <p>{title}</p>
            <p>{description}</p>
            <p>{created_date}</p>
            <img src={url} alt='missing'></img>
        </div>
    )
};

export default PaintingSingle;