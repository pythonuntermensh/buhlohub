import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { GET_ME } from '../gql/query';

import './styles/MyAccountElement.css';

const MyAccountElement = props => {
    const { data, loading, error } = useQuery(GET_ME);
    if (loading) return <p>Loading...</p>;
    if (error) {
        console.log(error);
        return <p>Error!</p>;
    }
    return (
        <Link to={'/user/' + data.me.username} className="account-element-wrapper">
            <img src={data.me.avatar} alt="avatar" />
            <p>{data.me.username}</p>
        </Link>
    );
};

export default MyAccountElement;