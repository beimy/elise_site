import React, { Fragment, useEffect } from 'react';
import { useSiteContext } from '../../utils/GlobalState';
import { SET_CURRENT_GALLERY_INDEX, TOGGLE_GALLERY_MODAL } from '../../utils/actions';


const PaintingSingle = ({title, materials, dimensions, created_date, url, index}) => {

    const [state, dispatch] = useSiteContext();

    function handleGalleryOpen(index) {
        dispatch({ type: SET_CURRENT_GALLERY_INDEX, new_gallery_index : index});
        dispatch({ type: TOGGLE_GALLERY_MODAL, isGalleryOpen : true});
        console.log(index);
    }

    if (!url) {
        return (
            <div className=' hidden'></div>
    )};

    return (
        <div className='p-10 h-fit cursor-pointer self-center' onClick={ () => handleGalleryOpen(index) }>
            <img className=' object-cover hover:scale-105 m-1 max-h-[40rem] max-w-[30rem]' src={url}></img>
            <div  className='m-2'>
                <p className=''>{title}</p>
                <p className=''>{materials}</p>
                <p className=''>{dimensions}</p>
                <p className=''>{created_date}</p>
            </div>
        </div>
    )
};

export default PaintingSingle;