import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardFrom from './SimpleCardFrom';

const stripePromise = loadStripe('pk_test_51IfIpCG6Y7toTHgW0AK7nhhSabiEud4MQmphajZwlSztDuyAHvRydVjhHKuiSTrP4kzPZfgtHPVuX0ezVrvZXMvS00sb9zyiIv');
const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardFrom handlePayment={handlePayment} />
        </Elements>
    );
};

export default ProcessPayment;