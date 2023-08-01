import React from 'react';
import Banner from './Banner';
import PhotGallery from './PhotoGallery/PhotGallery';
import SubCategory from '../SubCategory/SubCategory';
import ContactUs from './ExtraSection/ContactUs';
import { FaBlog } from 'react-icons/fa';
const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <SubCategory></SubCategory>
            <PhotGallery></PhotGallery>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;