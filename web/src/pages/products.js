import React from 'react'
import { useQuery } from '@apollo/client';

import { GET_DRINKS } from '../gql/query';

import Button from '../components/Button';
import AlcoholFeed from '../components/AlcoholFeed';

import './styles/Products.css';

const Products = () => {
    const { data, loading, error, fetchMore } = useQuery(GET_DRINKS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    return (
        <div className="catalog-wrapper">
            <p>The Best Alcohol</p>
            <ul className="products-wrapper">
                <AlcoholFeed drinks={data.drinkFeed.drinks} />
            </ul>
            {
                data.drinkFeed.hasNextPage && (
                    <Button text="Load more"
                        onClick={() => {
                            fetchMore({
                                variables: {
                                    cursor: data.drinkFeed.cursor
                                },
                                updateQuery: (previousResult, { fetchMoreResult }) => {
                                    return {
                                        drinkFeed: {
                                            cursor: fetchMoreResult.drinkFeed.cursor,
                                            hasNextPage: fetchMoreResult.drinkFeed.hasNextPage,
                                            // combine the new results and the old
                                            drinks: [
                                            ...previousResult.drinkFeed.drinks,
                                            ...fetchMoreResult.drinkFeed.drinks
                                            ],
                                            __typename: 'drinkFeed'
                                        }
                                    };
                                }
                            });}
                        }
                    />
                )
            }  
        </div>
    );
};

export default Products;
