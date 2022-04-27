import React, { useState, useEffect } from 'react';
import PlaylistBox from './PlaylistBox.jsx';

const Playlists = (props) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("/api/playlists")
//       .then(res => {
//         console.log('reached res.json');
//         res.json()
//       })
//       .then(res => setData(res))
//       .catch(err => console.log('Playlist, componentDidMount: get jobs: ERROR: ', err));
//   }, [])

// const playlist = [];

// for (let i = 0; i < data.length; i++) {
//   // access data[i].id // save playlist id to make second fetch request later
//   // access data[i].name // name of playlist
//   // access data[i].images[0].url // link to image for playlist
//   playlist.push(<PlaylistBox key={`Playlist ${i}`} id={data[i].id} name={data[i].name} imgURL={data[i].images[1].url} />)
// }

  // render {playlist} below

  return (
    <div>
      <PlaylistBox />
    </div>
  );
}

export default Playlists;