import React from 'react';
import SubCategoryCard from './SubCategoryCard';


const SubTab = ({ items }) => {
    return (
        <div className='gap-5 grid md:grid-cols-2 lg:grid-cols-3 ml-8'>
            {
                items.map(item => <SubCategoryCard
                    key={item._id}
                    item={item}
                ></SubCategoryCard>)
            }
        </div>
    );
};

export default SubTab;