import React, { useState } from 'react';
import Songs from './Songs';

const Search = (props) => {
    const [query, setQuery] = useState('');
    const [error, setError] = useState(null);
    const [results, setResults] = useState(null);

    // fakeData: 
    const fakeData = [
        {title: 'Umbrella', id: '1'},
        {title: 'Umbrella and Rain', id: '2'},
        {title: 'Get You', id: '3'},
        {title: 'Say So', id: '4'},
        {title: 'Say', id: '5'}
    ]

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            fetchResults(query);
        }
    }

    const fetchResults = (query) => {
        setResults(fakeData);
        console.log(results);
        // fetch(`/songs`) 
        //   .then(res => {
        //       if(res.ok) res.json();
        //       else {
        //           throw new Error('No results found');
        //       }
        //   })
        //   .then(data => {
        //       setResults(data);
        //   })
        //     setResults(data);
        //   })
        //   .catch(err => setError(err));
    }

    const songsArray = [];
    for (let i = 0; i < results?.length; i++) { // the '?' ensures we'll get blank display of songs if there are no songs
        songsArray.push(<Songs key={`Song ${i}`} id={results[i].id} title={results[i].title} handleSeeReviews={props.handleSeeReviews} />);
        //artist={results[i].artist} albumCover={results[i].albumCover}/> 
    }

    console.log(songsArray);

    return (
        <>
        <input placeholder='Search' value={query} onChange={e => setQuery(e.target.value)} onKeyDown={handleKeyDown}></input>
        {songsArray}
        </>
    )
}

export default Search;