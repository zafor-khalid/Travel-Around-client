import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const AdventureCard = ({img, title}) => {
    return (
        <Card className="m-2 custom-card" style={{ width: '18rem', borderRadius:'15px'}}>
            <Card.Img variant="top" src={img} style={{borderRadius:'15px'}} />
            <Card.Body>
                <Card.Title className="text-center " style={{fontWeight:'bold', color:'#020f24'}}>{title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
          </Card.Text>
                <h6 className="text-center text-success" ><FontAwesomeIcon icon={faMapMarkerAlt} /> Bangladesh</h6>
            </Card.Body>
        </Card>
    );
};

export default AdventureCard;