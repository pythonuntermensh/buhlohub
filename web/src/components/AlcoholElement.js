import React from 'react';
import { Link } from 'react-router-dom';

import './styles/AlcoholElement.css';

const AlcoholElement = props => {
    return (
        <li className="alcohol-element-wrapper">
            <Link to={"/product/"+props.id}>
                <img height="150" width="150" src={props.src} alt="img" className="alcohol-element-img"/>
                <div className="alcohol-element-info">
                    <div className="alcohol-element-name">{props.name}</div>
                    <div className="alcohol-element-proof">{"Крепкость: " + props.proof + "°"}</div>
                    <div className="alcohol-element-cost">{"Цена: " + props.cost + "$"}</div>
                </div>
            </Link>
        </li>
        
    );
};

export default AlcoholElement;