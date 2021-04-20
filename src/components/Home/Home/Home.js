import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import TopAdventure from '../TopAdventure/TopAdventure';
import UpcomingEvent from '../Upcoming Event/UpcomingEvent'

const Home = () => {
    return (
        <div>
            <Header />
            <UpcomingEvent />
            <Services />
            <TopAdventure />
            <Testimonials />
            
            
        </div>
    );
};

export default Home;