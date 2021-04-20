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
        <div style={{backgroundColor:'whitesmoke'}} className='py-5'>
            <h1 className="text-center" style={{fontWeight:'bold', color:'#020f24'}}>Top Tour Packages</h1>
            <div className='d-flex justify-content-center flex-wrap my-5'>
                {
                    spinner && <Spinner animation="border" variant="success" />
                }

                {
                    packages.map(pkg=> <ServiceCard key={pkg._id} pkg={pkg}></ServiceCard>)
                }
               
            </div>
        </div>
    );
};

export default Services;