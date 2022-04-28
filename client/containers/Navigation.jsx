import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/mytunes-logo-mui.png';
import { Button, AppBar, Container, Toolbar, Box } from '@mui/material';

const Navigation = (props) => {
  const [query, setQuery] = useState();
  let navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      props.handleSearch(query);
      navigate('/search');
    }
  };

  return (
    <AppBar position='static' sx={{ backgroundColor: 'transparent', mb: 10 }}>
      <Container maxWidth='xl'>
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Link to='/'>
              <img src={logo} className='logo-img' style={{ width: '150px' }} />
            </Link>
          </Box>

          <Box sx={{ display: 'flex' }}>
            <Link to='/'>
              <Button size='small'>HOME</Button>
            </Link>

            <Link to='/myreviews'>
              <Button size='small'>MY REVIEWS</Button>
            </Link>

            <Link to='/feeds'>
              <Button size='small'>FEEDS</Button>
            </Link>

            <Link to='/follow'>
              <Button size='small' sx={{ mr: 5 }}>
                FOLLOW
              </Button>
            </Link>

            <input
              style={{ minWidth: '300px' }}
              placeholder='Search'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
