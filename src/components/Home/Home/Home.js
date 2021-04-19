import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import TopAdventure from '../TopAdventure/TopAdventure';


const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <TopAdventure />
            <Testimonials />
            
        </div>
    );
};

export default Home;