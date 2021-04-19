import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ManageCard = ({pkg}) => {
    const history = useHistory();
    const handleDelete = (id) => {
        
        fetch(`http://localhost:5000/deletepackage/${id}`,{
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data=>{
            alert('Package Deletd!');
            history.push('/manageservices');
        })
    }
    return (
        <Card className='m-2 ' style={{ width: '18rem' }}>
        <Card.Title className='text-center mt-2'>{pkg.title}</Card.Title>
        <Card.Img variant="top" src={pkg.imageURL} />
        <Card.Body>

            <Card.Text>
                {pkg.description}
            </Card.Text>
            <div className='d-flex justify-content-between align-items-center '>
                <div>
                    <p>Starts From</p>
                    <h5>${pkg.price}</h5>
                </div>
                <Button variant="danger" onClick={()=>handleDelete(pkg._id)}>Delete</Button>
            </div>
        </Card.Body>
    </Card>
    );
};

export default ManageCard;