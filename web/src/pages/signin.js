import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';

import UserForm from '../components/UserForm';
import { SIGNIN_USER } from '../gql/mutation';

import './styles/SignForm.css';

const SignIn = props => {
    useEffect(() => {
        document.title = 'Вход - Бухло.Маркет';
    });

    const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
        onCompleted: data => {
            localStorage.setItem('token', data.signIn);
            props.history.push('/');
        }
    });

    return (
        <div className="signform-wrapper">
            <p>Вход</p>
            <UserForm typeForm='signin' action={signIn}/>
            {loading && <p>Загрузка...</p>}
            {error && <p>Ошибка при входе в аккаунт!</p>}
        </div>
    );
};

export default SignIn;