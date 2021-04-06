import { Button } from 'react-bootstrap';
import React, { useContext } from 'react';
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';

const Login = () => {

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    

    const handleGoogleSignIn = (e) => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = {name: displayName, email};
                // console.log(signedInUser);
                setLoggedInUser(signedInUser);

            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
            e.preventDefault();
    }

    return (
        <div>
            <Button className="mt-5" onClick={handleGoogleSignIn} variant="warning"><strong>Google Sign In</strong></Button>
        </div>
    );
};

export default Login;