import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { BookContext } from '../../Routing/Routing';
import './style.css';
import {motion} from 'framer-motion'

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

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
        <motion.div variant={stagger} whileHover={{scale: 1.03}} whileTap={{scale: 0.95}} style={{cursor: 'pointer', overflow: 'hidden'}}>
            <Card  className='m-2 shadow' style={{ width: '18rem', backgroundColor:'#020f24', borderRadius:'10px'}}>
                <Card.Title className='text-center mt-3  ' style={{fontWeight:'bold', color:'#88e0f6'}}>{pkg.title}</Card.Title>
                <motion.img whileHover={{
                    scale: [1, 0.7, 1],
                    rotate: [0, 180,360],
                    borderRadius:["0", "30%", "0"],
                }} className='card-img-top' src={pkg.imageURL} />
                <Card.Body>
                    
                    <Card.Text style={{color:'#c7c7bf'}}>
                        {pkg.description}
                    </Card.Text>
                    <div className='d-flex justify-content-between align-items-center '>
                        <div>
                            <p style={{color:'#88e0f6'}}>Starts From</p>
                            <h5 style={{color:'#88e0f6'}}>${pkg.price}</h5>
                        </div>
                            <Button variant="warning" onClick={()=>addToBook(pkg.title, pkg.price, pkg.description, pkg.imageURL)} >Book now</Button>
                    </div>
                </Card.Body>
            </Card>
        </motion.div>
    );
};

export default ServiceCard;