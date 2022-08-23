import React from 'react';
import { Link } from 'react-router-dom';

import './styles/AlcoholElement.css';

const ReviewElement = ({ review }) => {
    return (
        <li className="alcohol-element-wrapper">
            <Link to={"/review/"+review.id}>
                <img height="150" width="150" src={review.drink.img} alt="img" className="alcohol-element-img"/>
                <div className="alcohol-element-info">
                    <div className="alcohol-element-name">{review.title}</div>
                    <div className="alcohol-element-proof">by {review.author.username}</div>
                </div>
            </Link>
        </li>
    );
};

export default ReviewElement;