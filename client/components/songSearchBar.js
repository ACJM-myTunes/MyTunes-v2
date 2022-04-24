import React, { Component } from 'react';
import '../scss/songSearchBar.scss';


const SongSearchBar = (props) => {


    let queryParams = {}
    
    const handleChange = (e) => {
          queryParams['selectedValue'] = e.target.value
          console.log(queryParams)
      }

      const handleChangeQuery = (e) => {
        queryParams['queryValue'] = e.target.value
        console.log(queryParams)

    }

    const handleClick = () => {
        props.queryReviews(queryParams)
    }

    return (
            <form>
                <input type="text" placeholder="Enter search criteria" onChange = {handleChangeQuery}/>
                <select class="classic" onChange={handleChange}>
                    <option value="Artist">Artist</option>
                    <option value="Song">Song Name</option>
                    <option selected value="Genre">Genre</option>
                    <option value="Album">Album</option>
                </select>
                <button id="songSearchButton" type = "button" onClick = {handleClick}>Search</button>
            </form>
    );
}

export default SongSearchBar;


