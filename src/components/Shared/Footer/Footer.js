import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    const styles = {
        backgroundColor: '#020f24',
        color:'whitesmoke',
        margin:'auto',
        width:'100%'
    }
    return (
        <div className='row' style={styles}>
            <div className="col-md-2   mt-3" style={{ margin: 'auto', width: '100%' }}>
                <h6 className="my-5"><FontAwesomeIcon icon={faMapMarkerAlt} /> p#100(1st Floor), Road #02, <br />Segunbagicha, Ramna, Dhaka, Bangladesh</h6>
            </div>
            <div className="col-md-2   mt-5" style={{ margin: 'auto', width: '100%' }}>
                <h4 className="fw-bolder">Company</h4>
                <h6>About</h6>
                <h6>Project</h6>
                <h6>Our Team</h6>
                <h6>Terms Condition</h6>
                <h6>Submit Listing</h6>
            </div>
            <div className="col-md-2 mt-5" style={{ margin: 'auto', width: '100%' }}>
                <h4>Quick Links</h4>
                <h6>Quick links</h6>
                <h6>Rentals</h6>
                <h6>Sales</h6>
                <h6>Contarct</h6>
                <h6>Our Blogs</h6>
            </div>
            <div className="col-md-2   mt-5" style={{ margin: 'auto', width: '100%' }}>
                <h4>About Us</h4>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolorum?</h6>
            </div>
            <h6 className='text-center col-12 mx-auto my-5'> COPYRIGHT Travel Around 2021</h6>
        </div>
    );
};

export default Footer;