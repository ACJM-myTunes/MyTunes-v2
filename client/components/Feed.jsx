import React from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

function Feed({ title, review, username, rating }) {
  return (
    <>
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar alt={username}>{username[0].toUpperCase()}</Avatar>
        </ListItemAvatar>

        <ListItemText
          primary={
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {title}
              <Rating
                name='rating'
                value={parseInt(rating)}
                precision={0.5}
                size='small'
                readOnly
              />
            </Box>
          }
          secondary={
            <React.Fragment>
              <Typography variant='body2' color='text.primary'>
                {review}
              </Typography>
              {username}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant='inset' component='li' />
    </>
  );
}

export default Feed;
