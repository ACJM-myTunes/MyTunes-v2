import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PlaylistBox(props) {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        component="img"
        height="200"
        image="https://mosaic.scdn.co/300/ab67616d0000b27362c1f3370811c52ae2d26d24ab67616d0000b273798826876c8847fd51bea297ab67616d0000b273b658276cd9884ef6fae69033ab67616d0000b273fd220b07117400ccbc85ed96"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Reading
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View this Playlist</Button>
      </CardActions>
    </Card>
  );
}