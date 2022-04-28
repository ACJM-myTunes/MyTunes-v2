import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import Feed from '../components/Feed';
import { Container, Typography, Button, Box } from '@mui/material';

function Feeds() {
  const [feeds, setFeeds] = useState([]);
  useEffect(() => {
    fetch('/api/follows/reviews')
      .then((data) => data.json())
      .then((res) => setFeeds(res));
  }, []);

  const emptyFeeds = () => {
    return (
      <Box mt={10}>
        <Typography variant='h6'>
          It looks like you don't have any feeds...
        </Typography>
        <Button variant='contained' mt={10}>
          <Link to='/follow' style={{ color: 'white' }}>
            Add more people to follow
          </Link>
        </Button>
      </Box>
    );
  };

  const feedsList = () => {
    return (
      <>
        <Typography variant='h6'>Feeds</Typography>
        <Typography variant='subtitle1' sx={{ color: '#424242' }}>
          Here's what's trending
        </Typography>
        <Container
          sx={{
            mr: 10,
          }}
        >
          <List
            sx={{ width: '100%', maxWidth: 760, bgcolor: 'background.paper' }}
          >
            {feeds.map((feed) => {
              return <Feed {...feed} key={feed.id} />;
            })}
          </List>
        </Container>
      </>
    );
  };

  return (
    <Container maxWidth='lg'>
      {feeds.length > 0 && feedsList()}
      {feeds.length === 0 && emptyFeeds()}
    </Container>
  );
}

export default Feeds;
