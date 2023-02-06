import React, { useEffect } from "react";
import { useState } from "react";
import { useSiteContext } from '../../utils/GlobalState';
import { SET_CURRENT_GALLERY_INDEX, TOGGLE_GALLERY_MODAL } from "../../utils/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight, faCircleChevronLeft, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Gallery = () => {

    const [state, dispatch] = useSiteContext();

    function handleBtnClose() {
        dispatch({ type: TOGGLE_GALLERY_MODAL, isGalleryOpen : true})
    }

    function handleBtnPrev() {
        console.log('hit prev')
        var pic_data_length = state.pic_data.length - 1;
        var newIndex = state.current_gallery_index - 1 ; 
        if(newIndex < 0) {
            newIndex = pic_data_length;
        }
        else { newIndex = state.current_gallery_index - 1 }
        dispatch({ type: SET_CURRENT_GALLERY_INDEX, new_gallery_index : newIndex})
        console.log(newIndex)
    }

    function handleBtnNext() {
        console.log('hit next')
        var limit = state.pic_data.length - 1;
        var newIndex = state.current_gallery_index + 1 ; 
        if(state.current_gallery_index == limit) {
            newIndex = 0;
        }
        else { newIndex = state.current_gallery_index + 1 }
        dispatch({ type: SET_CURRENT_GALLERY_INDEX, new_gallery_index : newIndex})
    }

    return (
        <div className="sliderWrap fixed top-0 bottom-0 left-0 right-0 z-50 bg-black/[.50] flex align-middle justify-center w-full h-full overflow-hidden">
            <span className="btnClose fixed cursor-pointer opacity-60 z-50 hover:opacity-100 top-16 right-16" onClick={handleBtnClose }>
                <FontAwesomeIcon icon={faCircleXmark} className='h-12 '/>
            </span>
            <span className="btnPrev fixed cursor-pointer opacity-60 z-50 h-screen w-60 hover:opacity-100 top-1/2 left-16 transform:translateY(-50%)" onClick={handleBtnPrev }>
                <FontAwesomeIcon icon={faCircleChevronLeft} className=' h-12'/>
            </span>
            <span className="btnNext fixed cursor-pointer opacity-60 z-50 h-screen w-60 hover:opacity-100 top-1/2 right-16 transform:translateY(-50%)" onClick={handleBtnNext }>
                <FontAwesomeIcon icon={faCircleChevronRight} className='float-right h-12'/>
            </span>
            <div className="fixed top-64 right-60">
                <p className="py-1 text-3xl">{state.pic_data[state.current_gallery_index].title}</p>
                <p className="py-1 text-3xl">{state.pic_data[state.current_gallery_index].materials}</p>
                <p className="py-1 text-3xl">{state.pic_data[state.current_gallery_index].dimensions}</p>
                <p className="py-1 text-3xl">{state.pic_data[state.current_gallery_index].created_date}</p>
            </div>
            <div className="fullScreenImage flex align-middle justify-center m-24 opacity-100">
                <img src={state.pic_data[state.current_gallery_index].url} alt='' />
            </div>
        </div>
    )
}

export default Gallery; 