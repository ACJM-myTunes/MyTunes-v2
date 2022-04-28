import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PlaylistSongs from './PlaylistSongs';

export default function PlaylistBox(props) {
  // const [songs, setSongs] = useState([]);

  // useEffect(() => {
  //   fetch(`/api/playlists/${props.id}`)
  //     .then(res => {
  //       console.log('reached res.json');
  //       return res.json()
  //     })
  //     .then(songList => {
  //       console.log('songList:', songList); // empty array
  //       setSongs(songList)
  //       console.log('data in state:', songs);
  //     })
  //     .catch(err => console.log('songlist, useEffect: get jobs: ERROR: ', err));
  // }, [])

  // const songArtist = () => data.map(s => {return (<PlaylistSongs playlist={props.name}/>)})

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        component="img"
        height="200"
        image={props.imgURL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
      </CardContent>
      <CardActions>
        <PlaylistSongs playlist={props.name} pid={props.id}/>
        {/* {songArtist} */}
      </CardActions>
    </Card>
  );
}