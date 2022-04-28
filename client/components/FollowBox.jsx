import React, { useState } from 'react';

import { ListItem, ListItemText, Button, Box, Divider } from '@mui/material';

function FollowBox({ following, err, remove }) {
  //   const [err, setError] = useState('');

  return (
    <>
      <ListItem>
        <ListItemText
          primary={
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              {following}
              <Button onClick={() => remove(following)}>Delete</Button>
            </Box>
          }
          secondary={err}
        />
      </ListItem>
      <Divider component='li' />
    </>
  );
}

export default FollowBox;
