import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Songs = (props) => {
    let artists_str = '';
    for (let i = 0; i < props.artists.length; i++) {
      if (i === props.artists.length - 1) {
        artists_str +=  props.artists[i];
      }
      else artists_str += props.artists[i] + ', ';
    }

    return(
        <div id="eachTrack">
          <Card sx={{ maxWidth: 200 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://i.scdn.co/image/ab67616d0000b27314bd90935ed5a2ac6c662373" // {props.albumCover}
            />

            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {props.track}
              </Typography>
              <Typography gutterBottom variant="body1" component="div">
                {artists_str}
              </Typography>
              <Typography gutterBottom variant="caption" component="div">
                {props.albumName}
              </Typography>
            </CardContent>

            <CardActions>
              <Link to='/song/reviews'><Button size="small" onClick={ () => props.handleSeeReviews(props.track, artists_str, props.id)}>REVIEWS</Button></Link>
            </CardActions>   
          </Card>    
        </div>
    )
}

export default Songs; 