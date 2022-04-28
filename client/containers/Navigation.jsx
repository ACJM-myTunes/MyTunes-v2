import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/mytunes-logo-mui.png';
import Button from '@mui/material/Button';

const Navigation = (props) => {
    const [query, setQuery] = useState();
    let navigate = useNavigate();

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
           props.handleSearch(query);
           navigate('/search');
        }
    }

    return(
        <div className="nav">
            <div><a href={'/'}><img src={logo} className="logo-img"></img></a></div>
            {/* <div><a href={'/'} id="myTunes">mytunes</a></div> */}
            <div><Link to='/'><Button size="small">HOME</Button></Link></div>
            <div><Link to='/myreviews'><Button size="small">MY REVIEWS</Button></Link></div>
            <div><input style={{minWidth: '300px'}} placeholder='Search' value={query} onChange={e => setQuery(e.target.value)} onKeyDown={handleKeyDown}></input></div>
        </div>
    )
}

export default Navigation; 