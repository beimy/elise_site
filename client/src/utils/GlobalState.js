import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

const SiteContext = createContext();
const { Provider } = SiteContext;

const SiteProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        testAtt: 'test',
        errorModalOpen: false,
        pic_data: [],
        current_gallery_index : 0,
        isGalleryOpen: false
    });

    // console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useSiteContext = () => {
    return useContext(SiteContext);
};

export { SiteProvider, useSiteContext };