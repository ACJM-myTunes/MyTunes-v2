import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';
import FollowList from '../components/FollowList';

function Follow() {
  const [follow, setFollow] = useState('');
  const [message, setMessage] = useState('');
  const [followList, setFollowList] = useState([]);
  useEffect(() => fetchFollow(), []);
  const handleSubmit = () => {
    fetch('/api/follows', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ following: follow }),
    }).then((res) => {
      setFollow('');
      if (res.status === 400) {
        res.json().then((err) => setMessage(err.err));
      }
      if (res.status === 200) {
        // res.json().then((msg) => setMessage(msg));
        fetchFollow();
      }
    });
  };

  const handleDelete = (username) => {
    fetch('/api/follows', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ following: username }),
    }).then((res) => {
      if (res.status === 500) {
        res.json().then((data) => setError(data.err));
      }
      if (res.status === 200) {
        fetchFollow();
      }
    });
  };
  const fetchFollow = () => {
    fetch('/api/follows')
      .then((data) => data.json())
      .then((res) => setFollowList(res));
  };

  return (
    <Container maxWidth='md'>
      <Typography sx={{ color: '#b71c1c' }}>{message}</Typography>
      <Box sx={{ display: 'flex', mb: 5 }}>
        <TextField
          label='Enter username to follow'
          value={follow}
          onChange={(e) => setFollow(e.target.value)}
          variant='outlined'
          fullWidth
          //   sx={{ width: '60%' }}
        />
        <Button variant='contained' sx={{ ml: 2 }} onClick={handleSubmit}>
          Follow
        </Button>
      </Box>
      <FollowList following={followList} handleDelete={handleDelete} />
    </Container>
  );
}

export default Follow;
