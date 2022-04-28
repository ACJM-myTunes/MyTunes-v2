import React, { useState, useEffect } from 'react';
import { List } from '@mui/material';
import FollowBox from './FollowBox';

export default function FollowList({ following, handleDelete }) {
  //   const [following, setFollowing] = useState(null);
  const [err, setError] = useState('');

  //   const handleDelete = (username) => {
  //     fetch('/api/follows', {
  //       method: 'DELETE',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ following: username }),
  //     }).then((res) => {
  //       if (res.status === 500) {
  //         res.json().then((data) => setError(data.err));
  //       }
  //       if (res.status === 200) {
  //         fetchFollow();
  //       }
  //     });
  //   };
  //   const fetchFollow = () => {
  //     fetch('/api/follows')
  //       .then((data) => data.json())
  //       .then((res) => setFollowing(res));
  //   };
  //   useEffect(() => fetchFollow(), []);
  const list = () =>
    following.map((f) => {
      return (
        <FollowBox
          id={f.id}
          {...f}
          key={f.id}
          remove={handleDelete}
          err={err}
        />
      );
    });

  console.log(following);
  return <List>{following !== null && list()}</List>;
}
