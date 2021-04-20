import React, { Component } from 'react';
import cave from '../../Images/cave.png'
import fort from '../../Images/fort.png'
import surfing from '../../Images/surfing.png'
import { Carousel } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            
            <Carousel fade indicators={false} >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={cave}
                        alt="First slide"
                        style={{height:'40vw'}}
                    />
                    <Carousel.Caption >
                        <p style={{fontSize:'3vw', fontWeight:'bolder', color:'whitesmoke'}}>Expore Ancient Caves</p>
                        <p style={{fontSize:'1.7vw', fontWeight:'bold', color:'whitesmoke'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={fort}
                        alt="Second slide"
                        style={{height:'40vw'}}
                    />

                    <Carousel.Caption>
                        <p style={{fontSize:'3vw', fontWeight:'bolder', color:'whitesmoke'}}>The Fort</p>
                        <p style={{fontSize:'1.7vw', fontWeight:'bold', color:'whitesmoke'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={surfing}
                        alt="Third slide"
                        style={{height:'40vw'}}
                    />

                    <Carousel.Caption>
                        <p style={{fontSize:'3vw', fontWeight:'bolder', color:'whitesmoke'}}>Rule The Wave</p>
                        <p style={{fontSize:'1.7vw', fontWeight:'bold', color:'whitesmoke'}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
               
            </Carousel>
        </div>
    );
};

export default Header;