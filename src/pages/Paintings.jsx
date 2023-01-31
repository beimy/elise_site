import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSiteContext } from '../utils/GlobalState';
import PaintingSingle from '../components/PaintingSingle';


const PaintingsPage = () => {

    const [state, dispatch] = useSiteContext();

    console.log(state.pic_data);

    return (
        <div className='flex flex-col justify-center'>
            Paintings
            {state.pic_data.map((pic) => {
                        console.log(pic.title)
                        return (
                            <PaintingSingle
                                key={pic.title}
                                title={pic.title}
                                description={pic.description}
                                created_date={pic.created_date}
                                url={pic.url}
                            ></PaintingSingle>
                        )
                    })}
        </div>
        
    )
};

export default PaintingsPage;