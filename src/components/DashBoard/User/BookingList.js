import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Routing/Routing';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/bookings?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'CONTENT_TYPE': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const cardStyles = {
        border: '1px solid black',
        padding: '2vw',
        margin: '1vw',
        backgroundColor: 'dimgrey',
        color: 'white'

    };
    // console.log(bookings);
    return (
        <>
            <h1 className="text-center my-3">Booking List</h1>

            <div className="row d-flex justify-content-center">
                {

                    bookings.map(x => (
                        <div className='col-3' style={cardStyles}>
                            <h4 style={{backgroundColor:`${x.status==='pending' ? 'yellow' : (x.status==='reviewing') ? 'blue' : 'green'}`}} className='p-2 w-50 text-center mx-auto'>{x.status}</h4>
                            <h5>Id: {x._id}</h5>
                            <h5>PaymentId: {x.paymentId}</h5>
                            <h5>Time: {x.time} </h5>
                            {
                                x.services.map((y, idx) => (
                                    <li style={{ listStyleType: 'none' }}>{idx + 1}. {y.title}</li>
                                ))
                            }

                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default BookingList;