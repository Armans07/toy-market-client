import React from 'react';
import Banner from './Banner';
import PhotGallery from './PhotoGallery/PhotGallery';
import ExtraSection from './ExtraSection/ExtraSection';
import SubCategory from '../SubCategory/SubCategory';
const Home = () => {
   
    return (
        <div>
            <Banner></Banner>
            <PhotGallery></PhotGallery>
            <SubCategory></SubCategory>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;