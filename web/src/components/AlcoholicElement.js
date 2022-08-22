import React from "react";
import { Link } from 'react-router-dom';

import './styles/AlcoholicElement.css';

const AlcoholicElement = props => {
    return (
        <li className="alcoholic-list-element-wrapper">
            <Link to={'/user/'+props.username} className="alcoholic-element-link">
                <div className="alcoholic-element-wrapper">
                    <img src={props.src} alt="alcoholic" />
                    <div className="alcoholic-element-info">
                        <div>{props.username}</div>
                        <label>{props.reviewsCount} reviews</label>
                    </div>
                </div>
            </Link>
        </li>
        
    );
};

export default AlcoholicElement;