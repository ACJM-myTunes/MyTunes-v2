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
        console.log("params", queryParams)
        console.log("reviews", props.queryReviews)

    }

    return (
            <form>
                <input type="text" placeholder="Enter search criteria" onChange = {handleChangeQuery}/>
                <select class="classic" onChange={handleChange}>
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


