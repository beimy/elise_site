import {
    TEST,
    TOGGLE_ERROR_MODAL,
    GET_DATA_FROM_DB,
    SET_CURRENT_GALLERY_INDEX,
    TOGGLE_GALLERY_MODAL
} from './actions';
import { useReducer } from 'react';

export const reducer = (state, action) => {
    switch (action.type) {
        case TEST :
            return {
                ...state,
                test: 'test changed'
            };
        case TOGGLE_ERROR_MODAL :
            return {
                ...state,
                errorModalOpen: !state.errorModalOpen
            };
        case GET_DATA_FROM_DB :
            return {
                ...state,
                pic_data: action.new_pic_data
            };
        case SET_CURRENT_GALLERY_INDEX : 
            return {
                ...state,
                current_gallery_index: action.new_gallery_index
            };
        case TOGGLE_GALLERY_MODAL : 
        return {
            ...state,
            isGalleryOpen: !state.isGalleryOpen
        };
        default: 
            return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}