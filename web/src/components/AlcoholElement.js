import React from 'react';
import { Link } from 'react-router-dom';

import './styles/AlcoholElement.css';

const AlcoholElement = ({ drink }) => {
    return (
        <li className="alcohol-element-wrapper">
            <Link to={"/product/"+drink.id}>
                <img height="150" width="150" src={drink.img} alt="img" className="alcohol-element-img"/>
                <div className="alcohol-element-info">
                    <div className="alcohol-element-name">{drink.name}</div>
                    <div className="alcohol-element-proof">{"proof: " + drink.proof + "°"}</div>
                    <div className="alcohol-element-cost">{"cost: " + drink.averageCost + "$"}</div>
                </div>
            </Link>
        </li>
    );
};

export default AlcoholElement;