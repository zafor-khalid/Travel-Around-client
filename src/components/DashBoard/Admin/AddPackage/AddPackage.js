import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import './AddPackages.css'
const axios = require('axios');

const AddPackage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const history = useHistory();
    const [imgURL, setImgURL] = useState(null);

    const onSubmit = (data) =>{
        const ServiceData = {
            title: data.title,
            description: data.description,
            price: data.price,
            imageURL: imgURL
        };

        const url ='http://localhost:5000/addPackage';
        fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(ServiceData)
        })
            .then(res => alert('Package Added Successfully'))
        history.push('/addPackage')
    }

    const handleImgUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', "c274abf2a9914c46574edacc4427a86a")
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImgURL(response.data.data.display_url);

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className='my-5'>
            <h3>Add New Package</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input name="Title" defaultValue="Title" {...register("title")} className="my-1" />
                <br />
                <input name="description" defaultValue="Description" {...register("description")} className="my-1" />
                <br />
                <input name="price" defaultValue=" price" {...register("price")} className="my-1" />
                <br />
                <input type="file"  className="my-1" onChange={handleImgUpload} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddPackage;