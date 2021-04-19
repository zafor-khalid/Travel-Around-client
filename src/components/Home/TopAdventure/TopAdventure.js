import React from 'react';
import AdventureCard from './AdventureCard';
import AdventureOne from '../../Images/tour_1.jpg';
import AdventureTwo from '../../Images/tour_2.jpg'
import AdventureThree from '../../Images/tour_4.jpg'
import './TopAdventure.css'
const TopAdventure = () => {
    return (
        <section className="mainPart ">
            <h1 className=" text-center ">Our Top Adventure </h1>
            <div className=" d-flex justify-content-center flex-wrap mb-5">
                <AdventureCard img={AdventureOne} title={'Mountains'} />
                <AdventureCard img={AdventureTwo} title={'Ocean'} />
                <AdventureCard img={AdventureThree} title={'Diving'} />
            </div>
        </section>
    );
};

export default TopAdventure;