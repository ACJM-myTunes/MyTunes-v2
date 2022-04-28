import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

const EachReview = (props) => {
    return (
        <>
        <Box
    component="span"
    sx={{ display: 'flex', mx: '2px', transform: 'scale(0.8)' }}
  >
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {props.title}
        </Typography>
        <Rating
                name='rating'
                value={parseInt(props.rating)}
                precision={0.5}
                size='small'
                readOnly
              />
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {props.review}
        </Typography>
      </CardContent>
    </Card>
  </Box>
        </>
    )
}

export default EachReview; 