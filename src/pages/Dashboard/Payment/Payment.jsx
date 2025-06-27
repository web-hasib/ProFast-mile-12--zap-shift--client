import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe('pk_test_51ReX7PFTgf3JY4zRoQfcojRpVW9LeX0KXFe8U6oAzSX54ihc0PnXj45Ck2a9UoQwOkDcS0RAzxVnq7KoAK8Ch01500hwzI43ae')

const Payment = () => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm></PaymentForm>
        </Elements>
    );
};

export default Payment;