import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/newadmin', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data => {
            alert('Admin Added!');
        })
    };

    return (
        <div>
            <h2 className="text-center m-5">Make Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label for="email">Enter Email</label>
                <input name='email' {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default MakeAdmin;