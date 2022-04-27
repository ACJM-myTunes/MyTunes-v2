import React from 'react';
import SeeReviews from './SeeReviews';

const Songs = (props) => {
    // add button 'Add Review', invoke a handleclick function from MainContainer that returns reviews
    return(
        <div>
            {props.title}
            <SeeReviews handleSeeReviews={props.handleSeeReviews} id={props.id} /> 
        </div>
    )
}

export default Songs; 