import React, { useEffect, useState } from 'react';
import MyReviewsEach from '../components/MyReviewsEach'

const MyReviews = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
const fetchReviews = () => {
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
}
    const handleDelete = (reviewId) => {
        fetch(`/api/reviews/${reviewId}`, {method: 'DELETE', headers: {'Content-Type': 'application/json'}}).then(res => 
            {if(res.status === 200){
                fetchReviews()
        }})
    }
    useEffect(() => {
        setLoading(true);
        fetchReviews()
    }, [])

    const reviews = [];
    for (let i = 0; i < data?.length; i++) {
        reviews.push(
            <MyReviewsEach 
                key={`Review ${i}`}
                title={data[i].title}
                rating={data[i].rating}
                review={data[i].review}
                id={data[i].id}
                handleDelete={handleDelete}
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