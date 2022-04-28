import React, { useState, useEffect } from 'react';
import PlaylistBox from './PlaylistBox.jsx';

const Playlists = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/playlists")
      .then(res => {
        // console.log('reached res.json');
        return res.json()
      })
      .then(playlist => {
        // console.log('data:', playlist); 
        setData(playlist)
        // console.log('data in state:', data);
      })
      .catch(err => console.log('Playlist, useEffect: get jobs: ERROR: ', err));
  }, [])

  const playlist = () => data.map(p => {return (<PlaylistBox key={`Playlist ${p.id}`} id={p.id} name={p.name} imgURL={p?.images[1]?.url} />)})
  

  return (
    <div className='tracksGrid'>
      {data.length !==0 && playlist()}
    </div>
  );
}

export default Playlists;