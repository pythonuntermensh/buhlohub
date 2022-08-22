import React, { useState } from 'react';

import Button from './Button';

import './styles/UserForm.css';

const UserForm = props => {
    const [values, setValue] = useState();

    const onChange = event => {
        setValue({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div className="userform-wrapper">
            <form onSubmit={event => {
                event.preventDefault();
                props.action({
                    variables: {
                        ...values
                    }
                });
            }}>
                {props.typeForm === 'signup' && (
                    <React.Fragment>
                        <label htmlFor="username">Name:</label>
                        <input
                            required
                            type="text"
                            id="username"
                            name="username"
                            placeholder="username"
                            onChange={onChange}
                        />
                    </React.Fragment>
                )}
                <label htmlFor="email">Email:</label>
                <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    onChange={onChange}
                />
                <label htmlFor="username">Password:</label>
                <input
                    required
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    onChange={onChange}
                />
                <Button text="Submit" />
            </form>
        </div>
    );

    
};

export default UserForm;