import React from 'react';

import './styles/UserPageElement.css';

const UserPageElement = props => {
    return(
        <div className="userpage-element-wrapper">
            <img src={props.user.avatar} alt="avatar" />
            <div>{props.user.reviewsCount}</div>
        </div>
    );
};

export default UserPageElement;