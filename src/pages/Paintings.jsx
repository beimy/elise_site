import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSiteContext } from '../utils/GlobalState';
import PaintingSingle from '../components/PaintingSingle';
import Gallery from '../components/Gallery';


const PaintingsPage = () => {

    const [state, dispatch] = useSiteContext();

    console.log(state.pic_data[state.current_gallery_index]);

    return (
        <div className='flex flex-wrap align-middle justify-center mx-18 my-24'>
            {state.isGalleryOpen &&
                <Gallery />
            }
            
            {state.pic_data.map((pic, index) => {
                return (
                    <PaintingSingle
                        key={index}
                        title={pic.title}
                        materials={pic.materials}
                        dimensions={pic.dimensions}
                        created_date={pic.created_date}
                        url={pic.url}
                        index={index}
                    ></PaintingSingle>
                )
            })}

        </div>
        
    )
};

export default PaintingsPage;