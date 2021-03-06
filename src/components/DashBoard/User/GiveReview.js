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
        fetch('https://radiant-ridge-25179.herokuapp.com/addreview', {
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
            <h1 className='text-center my-5' style={{color:'#020f24', fontWeight:'bold'}}> Drop Your Opinion</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label for='reviewRating' style={{color:'#020f24'}}>Rating</label>
                <input name='reviewRating' defaultValue='10' {...register("reviewRating", { required: true })} />
                {errors.reviewRating && <span>This field is required</span>}<br />

                <label for='profession' style={{color:'#020f24'}}>Profession</label>
                <input name='profession' defaultValue='profession' {...register("profession", { required: true })} />
                {errors.reviewRating && <span>This field is required</span>}<br />

                <label for='reviewDescription' style={{color:'#020f24'}}>Review</label>
                <input name='reviewDescription' defaultValue='Description' {...register("reviewDescription", { required: true })} style={{ height: '6vw' }} />
                {errors.reviewDescription && <span>This field is required</span>}

                <input type="submit" style={{backgroundColor:'#020f24'}}/>
            </form>
        </div>
    );
};

export default GiveReview; 
