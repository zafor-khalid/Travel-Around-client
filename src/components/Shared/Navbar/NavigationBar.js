import React, { useContext, useEffect, useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Routing/Routing';
import './NavBar.css'
import placeholder from '../../Images/placeholder.png'

const NavigationBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/adminlist')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                data.map(dt => {
                    if (loggedInUser.email === dt.email) {
                        setAdmin(true);
                        return;
                    }
                })
            })

    }, [loggedInUser])

    return (
        <Navbar style={{backgroundColor:'#020f24'}} expand="lg" sticky="top">
            <Navbar.Brand href="#home">
                <Link to='/home' className="d-flex align-items-center  text-white">
                    <img src={placeholder} style={{ height: '45px', width: '45px'}} />
                    <h2 className="ml-2" style={{ fontWeight:'bold' }}>Travel Around</h2>
                </Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav"  style={{backgroundColor:'whitesmoke'}}/>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="mx-lg-3">
                        <Link className=" text-white" to='/home'>Home</Link>
                    </Nav.Link>

                    <Nav.Link className="mx-lg-3"> <Link className=" text-white" to='/home'>Packages</Link></Nav.Link>

                    <Nav.Link className="mx-lg-3"> <Link className=" text-white" to='/home'>Contract</Link></Nav.Link>

                    {
                        admin
                            ? <NavDropdown title="Dashboard" id="basic-nav-dropdown" className="text-white">

                                <NavDropdown.Item ><Link className=" text-dark" to='/allbookingslist'>All Bookings List</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link className=" text-dark" to='/addPackage'>Add package</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link className=" text-dark" to='/makeadmin'>Make Admin</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link className=" text-dark" to='/manageservices'>Manage Services</Link></NavDropdown.Item>

                            </NavDropdown>
                            : <NavDropdown title="Dashboard" id="basic-nav-dropdown"

                            >

                                <NavDropdown.Item ><Link className=" text-dark" to='/book'>Book</Link></NavDropdown.Item>

                                <NavDropdown.Item ><Link className=" text-dark" to='/bookinglist'>Booking List </Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link className=" text-dark" to='/givereview'>Give Review</Link></NavDropdown.Item>

                            </NavDropdown>
                    }

                    <Nav.Link className="mx-lg-3">
                        <Link className=" text-white" to='/home'>About Us</Link>
                    </Nav.Link>

                    <Nav.Link className="mx-lg-3">
                        <Link to='/login'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                        </Link>
                    </Nav.Link>

                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;

