import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
const UpcomingEvent = () => {

    return (
        <div style={{ backgroundColor: 'whitesmoke', paddingTop: '7vw', paddingBottom: '7vw' }} className="text-center">
            <h2 style={{ color: '#020f24', fontWeight: 'bold' }} className="mb-5">Upcoming Contry Tour</h2>
            <div style={{ color: '#00cfff', fontWeight: 'bold', fontSize: '4rem', textShadow:'0 0 3px black' }}>
                <Countdown date={Date.now() + 10000000000} />
            </div>

        </div>
    );
};

export default UpcomingEvent;