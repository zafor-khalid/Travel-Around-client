import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useEffect, useState } from 'react';
import { Accordion, Card, Dropdown, Table, Button } from 'react-bootstrap';

const AllBookingsList = () => {
    const [allList, setAllList] = useState([]);
    const [status, setStatus] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/allbookinglist')
            .then(res => res.json())
            .then(data => {
                setAllList(data)
                // console.log(data)
            })
    }, [status])

    const handleStatus = (newStatus, id) => {
        fetch(`http://localhost:5000/updatestatus/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({newStatus})
        })
            .then(res => res.json())
            .then(data => {
                setStatus(data);
                alert('Status Changed');
            })
    }


    return (
        <div style={{ paddingTop: '5vw', paddingBottom: '7vw', backgroundColor:'whitesmoke' }}>
            <h1 className='text-center m-3' style={{color:'#020f24', fontWeight:'bold'}}>ALL Booking List</h1>
            <Table className="w-75 m-auto text-center" striped bordered hover responsive style={{color:'#020f24'}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Payment Id</th>
                        <th>Services</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allList.map((i, idx) => (
                            <tr>
                                <td>{idx + 1}</td>
                                <td>{i.confirmation.name}</td>
                                <td>{i.confirmation.email}</td>
                                <td>{i.paymentId}</td>
                                <td>
                                    {
                                        <Dropdown>
                                            <Dropdown.Toggle style={{backgroundColor:'#020f24'}} id="dropdown-basic">
                                                See All ({i.services.length})
                                        </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                {
                                                    i.services.map(title => (
                                                        <Dropdown.Item disabled className='text-dark'>{title.title}</Dropdown.Item>
                                                    ))
                                                }
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    }
                                </td>
                                <td>
                                    <Dropdown>
                                        <Dropdown.Toggle 
                                        variant={(i.status==='pending') ? 'warning' : (i.status==='reviewing') ? 'info' : 'success' }
                                        id="dropdown-basic" className='text-white'>
                                            {i.status}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                            <Dropdown.Item onClick={() => handleStatus('pending', i._id)} style={{color:'#cd7509'}}>Pending</Dropdown.Item>
                                            <Dropdown.Item  onClick={() => handleStatus('reviewing', i._id)} style={{color:'#3aa5e3'}}>Reviewing</Dropdown.Item>
                                            <Dropdown.Item  onClick={() => handleStatus('confirmed', i._id)} style={{color:'#14a014'}}>Confirmed</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default AllBookingsList;