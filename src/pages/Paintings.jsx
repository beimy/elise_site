import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSiteContext } from '../utils/GlobalState';
import PaintingSingle from '../components/PaintingSingle';


const PaintingsPage = () => {

    const [state, dispatch] = useSiteContext();

    console.log(state.pic_data);

    return (
        <div className='flex flex-wrap mx-48 my-36'>
            {state.pic_data.map((pic) => {
                        return (
                            <PaintingSingle
                                key={pic.title}
                                title={pic.title}
                                materials={pic.materials}
                                dimensions={pic.dimensions}
                                created_date={pic.created_date}
                                url={pic.url}
                            ></PaintingSingle>
                        )
                    })}
        </div>
        
    )
};

export default PaintingsPage;