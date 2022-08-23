import React from 'react'
import { useQuery } from '@apollo/client';

import { GET_REVIEW } from '../gql/query';


const ReviewPage = props => {
    let id = props.match.params.review;

    const { data, loading, error } = useQuery(GET_REVIEW, { variables: { id } });

    if (loading) return <p>Loading...</p>;
    if (error) <p>Error! User not found. </p>;

    return (
        <>
            <p>{data.review.title}</p>
            <img src={data.review.drink.img} />
            <p>{data.review.text}</p>
            <p>by {data.review.author.username}</p>
        </>
    )
}

export default ReviewPage

