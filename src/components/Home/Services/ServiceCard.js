import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { BookContext } from '../../Routing/Routing';

const ServiceCard = ({pkg}) => {

    const [book, setBook] = useContext(BookContext);

    const addToBook = (title, price, description, imageURL) =>{
       
        const service = {
            title: title,
            price: price,
            img: imageURL,
            description: description
        }
        if(book.length > 0){
            const newBook = [...book, service];
            setBook(newBook)
            // console.log(...cart)
        }
        else{
            const newBook = [service];
            setBook(newBook)
            // console.log(cart)
        }
        
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
                    <Button variant="primary" onClick={()=>addToBook(pkg.title, pkg.price, pkg.description, pkg.imageURL)} >Book now</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ServiceCard;