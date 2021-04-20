import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { UserContext } from '../Routing/Routing';
import { useHistory, useLocation } from 'react-router';
import google from '../Images/google.png'

const initializeLoginFramework = () => {
    !firebase.apps.length && firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleLogIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {

                var user = result.user;
                // console.log(user);
                handleResponse(user)
            }).catch((error) => {

                // var errorCode = error.code;
                // var errorMessage = error.message;


            });
    }

    const handleResponse = (res) => {
        setLoggedInUser(res);
        history.replace(from);
    }

    return (
        <div className='text-center' style={{ marginTop: '16rem', marginBottom:'16rem' }}>
            <button className="btn btn-outline-primary" onClick={handleLogIn}>
                <img className='mr-1' src={google} alt="" height='30px' width='30px' />
                Continue with Google</button>

        </div>
    );
};

export default Login;