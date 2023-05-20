import React from 'react';
import Banner from './Banner';
import PhotGallery from './PhotoGallery/PhotGallery';
import ExtraSection from './ExtraSection/ExtraSection';
const Home = () => {
   
    return (
        <div>
            <Banner></Banner>
            <PhotGallery></PhotGallery>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;