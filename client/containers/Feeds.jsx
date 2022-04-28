import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';

function Feeds() {
  const [feeds, setFeeds] = useState([]);
  useEffect(() => {
    fetch();
  });
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    ></List>
  );
}

export default Feeds;
