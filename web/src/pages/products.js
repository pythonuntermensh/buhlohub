import React from 'react'
import { useQuery } from '@apollo/client';

import { GET_DRINKS } from '../gql/query';

import AlcoholElement from '../components/AlcoholElement';

import './styles/Products.css';

const Products = () => {
    const { data, loading, error, fetchMore } = useQuery(GET_DRINKS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;
    return (
        <div className="catalog-wrapper">
            <p>The Best Alcohol</p>
            <ul className="products-wrapper">
                {data.drinkFeed.drinks.map(drink => (
                    <AlcoholElement 
                        name={drink.name} 
                        src={drink.img} 
                        proof={drink.proof} 
                        cost={drink.averageCost} 
                        key={drink.id} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default Products;
