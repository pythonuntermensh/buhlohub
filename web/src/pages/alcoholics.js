import React from "react";
import { useQuery } from '@apollo/client';

import { GET_TOP_USERS } from "../gql/query";

import AlcoholicElement from "../components/AlcoholicElement";

import './styles/Alcoholics.css';

const Alcoholics = () => {
    const { data, loading, error } = useQuery(GET_TOP_USERS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;
    return (
        <div className="alcoholics-wrapper">
            <p>Top Alcoholics</p>
            <ul className="alcoholics-elements-wrapper">
                {data.users.map(user => (
                    <AlcoholicElement 
                        username={user.username}
                        src={user.avatar}
                        reviewsCount={user.reviewsCount}
                        key={user.username}
                    />
                ))}
            </ul>
            
        </div>
        
    );
};

export default Alcoholics;