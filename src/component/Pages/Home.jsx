import React from 'react';
import Banner from './Banner';
import AboutUs from './AboutUs';
import OurProject from './OurProject';
import RecentNews from './RecentNews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <OurProject></OurProject>
            <RecentNews></RecentNews>
            
        </div>
    );
};

export default Home;