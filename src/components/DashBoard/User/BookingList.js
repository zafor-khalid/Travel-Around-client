import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { UserContext } from '../../Routing/Routing';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://radiant-ridge-25179.herokuapp.com/bookings?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'CONTENT_TYPE': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    // const cardStyles = {
    //     borderRadius: '10px',
    //     padding: '2vw',
    //     backgroundColor: 'dimgrey',
    //     color: 'white',
    //     width: '50rem'

    // };
    // console.log(bookings);
    return (
        <div style={{ paddingTop: '5rem', paddingBottom: '5rem', backgroundColor:'whitesmoke' }}>
            <h1 className="text-center my-3" style={{ color: '#020f24', fontWeight: 'bold' }}>Booking List</h1>

            <div className="d-flex justify-content-center flex-wrap">
                {

                    bookings.map(x => (
                        <>
                            {/* <div className='col-3' style={cardStyles}>
                                <h4 style={{ backgroundColor: `${x.status === 'pending' ? 'yellow' : (x.status === 'reviewing') ? 'blue' : 'green'}` }} className='p-2 w-50 text-center mx-auto'>{x.status}</h4>
                                <h5>Id: {x._id}</h5>
                                <h5>PaymentId: {x.paymentId}</h5>
                                <h5>Time: {x.time} </h5>
                                {
                                    x.services.map((y, idx) => (
                                        <li style={{ listStyleType: 'none' }}>{idx + 1}. {y.title}</li>
                                    ))
                                }

                            </div> */}
                            <Card
                                bg='dark'
                                text={'white'}
                                style={{ width: '25rem' }}
                                className="m-2"
                            >
                                <Card.Header className='text-center' style={{ backgroundColor: `${x.status === 'pending' ? '#cd7509' : (x.status === 'reviewing') ? '#3aa5e3' : '#14a014'}`, fontWeight:'bold' }}>{x.status}</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <h6><span style={{color:'tomato'}}>Id:</span> {x._id}</h6>
                                        <h6><span style={{color:'tomato'}}>PaymentId:</span>: {x.paymentId}</h6>
                                        <h6><span style={{color:'tomato'}}>Time:</span>: {x.time} </h6>
                                        <h6><span style={{color:'tomato'}}>Booked packages:</span></h6>
                                        {
                                            x.services.map((y, idx) => (
                                                <li style={{ listStyleType: 'none' }}>{idx + 1}. {y.title}</li>
                                            ))
                                        }
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </>
                    ))
                }
            </div>
        </div>
    );
};

export default BookingList;