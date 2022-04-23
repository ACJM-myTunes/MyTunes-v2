import React from 'react';
import '../scss/UserSearch.scss';

const UserSearch = (props) => {
    //const onClick = (e) => {
        // Tracks.find(e.target.value)
    //     e.preventDefault();
    // }
    return(
        <form action="/" method="get" /*onClick={onClick}*/>
            <input type="text" placeholder="Enter a user name"/>
            <button type="submit">Search</button>
        </form>
    );
};
export default UserSearch;