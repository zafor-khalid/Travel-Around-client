import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import trash from '../../../Images/trash.png'
const ManageCard = ({pkg}) => {
    const history = useHistory();
    const handleDelete = (id) => {
        
        fetch(`https://radiant-ridge-25179.herokuapp.com/deletepackage/${id}`,{
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data=>{
            alert('Package Deletd!');
            history.push('/manageservices');
        })
    }
    return (
        <Card className='m-2 ' style={{ width: '18rem', backgroundColor:'#020f24'}}>
        <Card.Title className='text-center mt-2' style={{color:'#88e0f6', fontWeight:'bold'}}>{pkg.title}</Card.Title>
        <Card.Img variant="top" src={pkg.imageURL} />
        <Card.Body>

            <Card.Text style={{color:'whitesmoke'}}>
                {pkg.description}
            </Card.Text>
            <div className='d-flex justify-content-between align-items-center '>
                <div>
                    <p style={{color:'#88e0f6'}}>Starts From</p>
                    <h5 style={{color:'#88e0f6'}}>${pkg.price}</h5>
                </div>
                <Button variant="danger" onClick={()=>handleDelete(pkg._id)}> Delete <img src={trash} alt="" height='20px' width='20px'/> </Button>
            </div>
        </Card.Body>
    </Card>
    );
};

export default ManageCard;