import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';

import UserForm from '../components/UserForm';
import { SIGNUP_USER } from '../gql/mutation';

import './styles/SignForm.css';

const SignUp = props => {
    useEffect(() => {
        document.title = 'Регистрация - Бухло.Маркет'
    });

    const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
        onCompleted: data => {
            localStorage.setItem('token', data.signUp);
            props.history.push('/');
        }
    });

    return (
        <div className="signform-wrapper">
            <p>Регистрация</p>
            <UserForm typeForm='signup' action={signUp}/>
            {loading && <p>Загрузка...</p>}
            {error && <p>Ошибка при создании аккаунта!</p>}
        </div>
    );
};

export default SignUp;