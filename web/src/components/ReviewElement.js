import React from 'react';
import { Link } from 'react-router-dom';

import './styles/CatalogElement.css';

const ReviewElement = ({ review }) => {
    return (
        <li className="catalog-element-wrapper">
            <Link to={"/review/"+review.id}>
                <img height="150" width="150" src={review.drink.img} alt="img" className="catalog-element-img"/>
                <div className="catalog-element-info">
                    <div className="catalog-element-name">{review.title}</div>
                    <div className="catalog-element-proof">by {review.author.username}</div>
                </div>
            </Link>
        </li>
    );
};

export default ReviewElement;