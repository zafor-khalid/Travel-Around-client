import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const AdventureCard = ({img, title}) => {
    return (
        <Card className="m-2" style={{ width: '18rem'}}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title className="text-center ">{title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
          </Card.Text>
                <h6 className="text-center"><FontAwesomeIcon icon={faMapMarkerAlt} /> adas</h6>
            </Card.Body>
        </Card>
    );
};

export default AdventureCard;