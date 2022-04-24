import React, { Component } from 'react';
import '../scss/songSearchBar.scss';


const SongSearchBar = (props) => {
    return (
            <form action="/" method="get" /*onClick={onClick}*/>
                <input type="text" placeholder="Enter search criteria"/>
                <select class="classic">
                    <option value="Artist">Artist</option>
                    <option value="Song">Song Name</option>
                    <option selected value="Genre">Genre</option>
                    <option value="Album">Album</option>
                </select>
                <button id="songSearchButton" type="submit">Search</button>
            </form>
    );
}

export default SongSearchBar;