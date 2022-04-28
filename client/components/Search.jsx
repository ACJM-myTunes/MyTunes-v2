import React from 'react';

const Search = (props) => {
    return (
        <div className="tracksGrid">
            {props.songsArray.length === 0 && <div>Loading...</div>}
            {!props.searchError && props.songsArray}
            {props.searchError && <div id="error">{props.searchError}</div>}
        </div>
    )
}

export default Search;