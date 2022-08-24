import React from 'react';
import { Link } from 'react-router-dom';

import './styles/CatalogElement.css';

const AlcoholElement = ({ drink }) => {
    return (
        <li className="catalog-element-wrapper">
            <Link to={"/product/"+drink.id}>
                <img height="150" width="150" src={drink.img} alt="img" className="catalog-element-img"/>
                <div className="catalog-element-info">
                    <div className="catalog-element-name">{drink.name}</div>
                    <div className="catalog-element-proof">{"proof: " + drink.proof + "°"}</div>
                    <div className="catalog-element-cost">{"cost: " + drink.averageCost + "$"}</div>
                </div>
            </Link>
        </li>
    );
};

export default AlcoholElement;