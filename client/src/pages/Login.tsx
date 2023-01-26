import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';

//WE NEED TO USE SIGN IN WITH POPUP IF WE USE GOOGLE SIGN IN WITH A CHROME EXTENSION

type LoginPageProps = {};

const LoginPage: React.FunctionComponent<LoginPageProps> = () => {
    const navigateTo = useNavigate();
    const [authing, setAuthing] = useState(false);

    const signInWithGoogle = async () => {
        setAuthing(true);

        signInWithPopup(auth, new GoogleAuthProvider())
            .then((response) => {
                console.log(response.user.uid);
                navigateTo('/home');
            })
            .catch((error) => {
                console.log(error);
                setAuthing(false);
            });
    };

    return (
        <div>
            <p>Login Page</p>
            <button onClick={() => signInWithGoogle()} disabled={authing}>
                Sign in with Google
            </button>
        </div>
    );
};

export default LoginPage;