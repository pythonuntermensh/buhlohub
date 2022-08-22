import React from 'react';

import AlcoholElement from './AlcoholElement';


const AlcoholFeed = props => {
    return (
        <>
            {props.drinks.map(drink => (
                <AlcoholElement drink={drink} key={drink.id}/>
            ))}
        </>
    );
};

export default AlcoholFeed;