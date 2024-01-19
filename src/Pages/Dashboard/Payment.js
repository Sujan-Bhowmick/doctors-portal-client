import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51MCdnyEdQYVjfvABN9JHoXzB1SZTM9l7ahWKYJVzv1WReOxk5yfyKvMjPpozPMV3jj0lEVSx9r9tj53xHWbMsSpZ00D3aPKmRP');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p className='text-success font-bold'>Hello, {appointment.patientName}</p>
                            <h2 className="card-title">Please pay for {appointment.treatment}</h2>
                            <p>Your Appointment: <span className='text-orange-700' > {appointment.date} </span> at {appointment.slot}</p>

                            <p>Please pay: ${appointment.price}</p>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm appointment={appointment} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;