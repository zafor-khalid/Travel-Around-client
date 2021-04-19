import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { Spinner } from 'react-bootstrap';

const Services = () => {
    const [packages, setPackages] = useState([]);
    const [spinner, setSpinner] = useState(true);
    
    useEffect(() => {
        
        fetch('http://localhost:5000/allPackages')
            .then(res => res.json())
            .then(data => {
                setPackages(data)
                setSpinner(false)
            })
    }, [])

    return (
        <>
            <h1 className="text-center mt-5">Top Tour Packages</h1>
            <div className='d-flex justify-content-center flex-wrap my-5'>
                {
                    spinner && <Spinner animation="border" variant="success" />
                }

                {
                    packages.map(pkg=> <ServiceCard pkg={pkg}></ServiceCard>)
                }
                {/* <ServiceCard img={IceSkating} title={'ICE SKATING'} tk={'150'} />
                <ServiceCard img={MountainTrekking} title={'MOUNTAIN TREKKING'} tk={'250'} />
                <ServiceCard img={SurfingInSea} title={'SURFING IN SEA'} tk={'650'} /> */}
            </div>
        </>
    );
};

export default Services;