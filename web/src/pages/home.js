import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_REVIEWS } from '../gql/query';

import Button from '../components/Button';
import ReviewFeed from '../components/ReviewFeed';

const Home = () => {
    const { data, loading, error, fetchMore } = useQuery(GET_REVIEWS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    return (
        <div className="catalog-wrapper">
            <p>Home - Top Reviews</p>
            <ul className="products-wrapper">
                <ReviewFeed reviews={data.reviewFeed.reviews} />
            </ul>
            {
                data.reviewFeed.hasNextPage && (
                    <Button text="Load more"
                        onClick={() => {
                            fetchMore({
                                variables: {
                                    cursor: data.reviewFeed.cursor
                                },
                                updateQuery: (previousResult, { fetchMoreResult }) => {
                                    return {
                                        reviewFeed: {
                                            cursor: fetchMoreResult.reviewFeed.cursor,
                                            hasNextPage: fetchMoreResult.reviewFeed.hasNextPage,
                                            // combine the new results and the old
                                            reviews: [
                                            ...previousResult.reviewFeed.reviews,
                                            ...fetchMoreResult.reviewFeed.reviews
                                            ],
                                            __typename: 'reviewFeed'
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

export default Home;