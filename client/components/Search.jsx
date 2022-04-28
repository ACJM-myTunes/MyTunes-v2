import React from 'react';

const Search = (props) => {
    return (
        <>
        {!props.searchError && <div className="tracksGrid">{props.songsArray}</div>}
        {props.searchError && <div id="error">{props.searchError}</div>}
        </>
    )
}

export default Search;