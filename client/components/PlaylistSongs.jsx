import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const PlaylistSongs = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [songslist, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/playlists/${props.pid}`)
      .then(res => {
        console.log('reached res.json');
        return res.json()
      })
      .then(data => {
        // console.log('data:', data);
        // console.log(data[0].track.album.name);
        setSongs(data) // not working
        setLoading(true);
        // console.log('songs in state:', songslist);
      })
      .catch(err => {
        console.log('songlist, useEffect: get jobs: ERROR: ', err);
        setLoading(false);
      })
  }, [])

  // console.log('songlist outside useEffect:', songslist);

  const playSongs = [];
  for (let i = 0; i < songslist?.length; i++) {
    console.log('track', songslist[i].track)
    playSongs.push(<div>{songslist[i].track.name} <Button size="small"><Link to='/addreview' state={{trackID: songslist[i].track.id, title: songslist[i].track.name}}>Add Review</Link></Button></div>)
  }

  return (
    <div>
      <Button onClick={handleOpen}>View this Playlist</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.playlist}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {playSongs}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default PlaylistSongs;