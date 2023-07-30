import React from 'react';
import Banner from './Banner';
import PhotGallery from './PhotoGallery/PhotGallery';
import ExtraSection from './ExtraSection/ExtraSection';
import SubCategory from '../SubCategory/SubCategory';
import Navbar from '../Shared/Navbar';
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