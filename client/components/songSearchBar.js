import React, { Component } from 'react';
import '../scss/songSearchBar.scss';


const SongSearchBar = (props) => {


    let queryParams = {}
    
    const handleChange = (e) => {
          queryParams['selectedValue'] = e.target.value
      }

      const handleChangeQuery = (e) => {
        queryParams['queryValue'] = e.target.value

    }

    const handleClick = () => {
        props.queryReviews(queryParams)


    }

    return (
            <form>
                <input type="text" placeholder={"Search for Music"} onChange = {handleChangeQuery}/>
                <select selected="artists" class="classic" onChange={handleChange}>
                    <option value="artists">Artist</option>
                    <option value="tracks">Song Name</option>
                    <option selected value="genres">Genre</option>
                    <option value="songs">Album</option>
                </select>
                <button id="songSearchButton" type = "button" onClick = {handleClick}>Search</button>
            </form>
    );
}

export default SongSearchBar;


