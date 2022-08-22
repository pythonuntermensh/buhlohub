import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { GET_USER, GET_ME } from '../gql/query';
import { CHANGE_AVATAR } from '../gql/mutation';

import Button from '../components/Button';
import AlcoholElement from '../components/AlcoholElement';

import './styles/User.css';

const UserPage = props => {

    const refreshPage = () =>{ 
        window.location.reload();
     }

    const [values, setValue] = useState();

    const onChange = event => {
        setValue({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const [changeAvatar] = useMutation(CHANGE_AVATAR, {
        onCompleted: () => {
            props.history.push('/');
        }
    });

    let username = props.match.params.username;

    const { data, loading, error } = useQuery(GET_USER, { variables: { username } });
    const { data:myData, loading:myLoading } = useQuery(GET_ME);

    if (loading || myLoading) return <p>Loading...</p>;
    if (error) <p>Error! User not found. </p>;
    if (data.user === null) return <p>User not found.</p>;
    return (
        <div className="userpage-wrapper">
            <div className="userpage-main-content-wrapper">
                <div className="userpage-main-info-wrapper">
                    <p>{data.user.username}</p>
                    <img src={data.user.avatar} alt="avatar" />
                    <div>Review: {data.user.reviewsCount}</div>
                </div>
                {data.user.id === myData.me.id && (
                    <form className="change-avatar-form" 
                        onSubmit={event => {
                            event.preventDefault();
                            changeAvatar({
                                variables: {
                                    ...values
                                }
                            });
                            refreshPage();
                    }}>
                        <label htmlFor="src">Avatar Change:</label>
                        <input
                            required
                            type="text"
                            id="src"
                            name="src"
                            placeholder="IMAGE URL"
                            onChange={onChange}
                        />
                        <Button text="Submit" />
                    </form>
                )}
                
            </div>
            <p>Published alcohol:</p>
            <ul className="products-wrapper">
                {data.user.drinks.map(drink => (
                    <AlcoholElement 
                        key={drink.id} 
                        src={drink.img}
                        name={drink.name}
                        cost={drink.averageCost}
                        proof={drink.proof}
                    />
                ))}
            </ul>
        </div>
    );
}

export default UserPage;