import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import { UserContext } from '../../Routing/Routing';

const GiveReview = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    console.log(loggedInUser)
    const onSubmit = data => {
        data.name = loggedInUser.displayName;
        data.img = loggedInUser.photoURL;
        console.log(data)
        fetch('http://localhost:5000/addreview', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert('Review Added Successfully!')
                history.push('/');
            })

    };

    return (
        <div className='my-5'>
            <h1 className='text-center my-5'>Drop Your Opinion</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label for='reviewRating'>Rating</label>
                <input name='reviewRating' defaultValue='10' {...register("reviewRating", { required: true })} />
                {errors.reviewRating && <span>This field is required</span>}<br />

                <label for='profession'>Profession</label>
                <input name='profession' defaultValue='profession' {...register("profession", { required: true })} />
                {errors.reviewRating && <span>This field is required</span>}<br />

                <label for='reviewDescription'>Review</label>
                <input name='reviewDescription' defaultValue='Description' {...register("reviewDescription", { required: true })} style={{ height: '6vw' }} />
                {errors.reviewDescription && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default GiveReview; 
