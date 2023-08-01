import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubTab from './SubTab';

const SubCategory = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch("https://toy-market-server-sigma.vercel.app/alltoy")
            .then(res => res.json())
            .then(result => {
                setToys(result)
            });
    }, [])

    const science = toys.filter(item => item.category === 'biology-toys');
    const math = toys.filter(item => item.category === 'math-toys');
    const engineering = toys.filter(item => item.category === 'technology-toys');

    return (
        <div>
            <h2 className='text-center text-3xl font-extrabold text-blue-900 my-5'>Choose Another Category</h2>
            <div className='mx-auto flex justify-center items-center'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="text-center underline ">
                        <Tab>Engineering</Tab>
                        <Tab>Math</Tab>
                        <Tab>Science</Tab>
                        <hr  className='mb-5 border-1'/>
                    </TabList>
                    <TabPanel><SubTab items={science}></SubTab></TabPanel>
                    <TabPanel><SubTab items={math}></SubTab></TabPanel>
                    <TabPanel><SubTab items={engineering}></SubTab></TabPanel>
                </Tabs>
            </div>
            
        </div>
    );
};

export default SubCategory;