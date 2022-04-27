import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = props => {
    // home | my reviews -----------> [search bar]
    // right now,  link to only renders and changes the route, does not actually 'get' the path 
    return (
        <>
        <div>
            <Link to='/home/myreviews'>my reviews</Link>
        </div>
        </>
    )
}

export default Navigation; 