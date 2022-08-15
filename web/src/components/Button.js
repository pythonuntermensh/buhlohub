import React from 'react';

import './styles/Button.css';

const Button = props => {
    return (
        <button type="submit">{props.text}</button>
    );
};

export default Button;