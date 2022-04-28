import React, { useEffect, useState } from 'react';
import MyReviewsEach from '../components/MyReviewsEach'

const MyReviews = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch('/api/reviews')
            .then(res => {
                if (res.ok) return res.json();
            })
            .then(res => { 
                setData(res);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, [])

    if (loading || data.length===0) return <div>Loading...</div>;
    console.log(data);

    const reviews = [];
    for (let i = 0; i < data?.length; i++) {
        reviews.push(
            <MyReviewsEach 
                key={`Review ${i}`}
                title={data[i].title}
                rating={data[i].rating}
                review={data[i].review}
            />
        )
    }

    return(
        <>
        <div id="reviews">
            {!error && reviews}
            {error && <div id="error">{error}</div>}
        </div>
        </>
    )
}

export default MyReviews; 