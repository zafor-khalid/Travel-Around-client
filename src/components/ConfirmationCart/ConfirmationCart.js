import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './ConfirmationCart.css';
import { useContext } from 'react';
import { BookContext, UserContext } from '../Routing/Routing'
import ProcessPayment from '../ProcessPayment/ProcessPayment';


const ConfirmationCart = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [book, setBook] = useContext(BookContext);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [confirmationData, setConfirmationData] = useState(null);
    const [congratulate, setCongratulate] = useState(false);

    const onSubmit = data => setConfirmationData(data);

    // console.log(loggedInUser);
    // console.log(book);

    const handlePaymentSuccess = paymentId => {

        const details = {
            // ...loggedInUser,
            services: book,
            confirmation: confirmationData,
            paymentId,
            time: new Date(),
            status: 'pending'

        };
        fetch('http://localhost:5000/confirmBooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setBook([]);
                    setCongratulate(true);
                }
            })

    }

    return (
        <div>
            <div style={{ display: confirmationData  ? 'none' : 'block' }}>
                <h1 className="text-center my-5">Give Details Information</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={loggedInUser.displayName} {...register("name", { required: true })} />
                    {errors.Name && <span>This field is required</span>}

                    <input defaultValue="Address" {...register("address", { required: true })} />
                    {errors.Address && <span>This field is required</span>}

                    <input defaultValue={loggedInUser.email} {...register("email", { required: true })} />
                    {errors.Email && <span>This field is required</span>}

                    <input defaultValue="Phone" {...register("phone", { required: true })} />
                    {errors.Phone && <span>This field is required</span>}

                    <input type="submit" />

                </form>
            </div>

            <div style={{display: confirmationData && !congratulate ? 'block' : 'none' }}>
                <h1 className="text-center my-3">Confirm Payment</h1>
                <ProcessPayment handlePayment={handlePaymentSuccess} />
            </div>

            <div style={{display: confirmationData && congratulate ? 'block' : 'none', margin:'11vw' }}>
                <h1 className="text-center my-3">CONGRATULATION! YOUR BOOKING CONFIRMED!</h1>
               
            </div>
        </div>

    );
};

export default ConfirmationCart;