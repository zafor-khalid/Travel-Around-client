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
        <div style={{backgroundColor:'whitesmoke', paddingBottom:'15vw', paddingTop:'8vw'}}>
            <h2 className="text-center m-5" style={{color:'#020f24', fontWeight:'bold'}}>Make Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label for="email" style={{color:'#020f24'}}>Enter Email</label>
                <input name='email' {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}

                <input type="submit" style={{backgroundColor:'#020f24'}} />
            </form>
        </div>
    );
};

export default MakeAdmin;