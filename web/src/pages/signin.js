import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';

import UserForm from '../components/UserForm';
import { SIGNIN_USER } from '../gql/mutation';

import './styles/SignForm.css';

const SignIn = props => {
    useEffect(() => {
        document.title = 'Sign In - BUHLO.MARKET';
    });

    const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
        onCompleted: data => {
            localStorage.setItem('token', data.signIn);
            props.history.push('/');
        }
    });

    return (
        <div className="signform-wrapper">
            <p>Sign In</p>
            <UserForm typeForm='signin' action={signIn}/>
            {loading && <p>Loading...</p>}
            {error && <p>Error while signing in!</p>}
        </div>
    );
};

export default SignIn;