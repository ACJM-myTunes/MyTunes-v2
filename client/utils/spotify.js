const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:8080/';
const clientId = '92edc0bb3af34697b651f0e9efe49c5d';

const scopes = ['streaming', 'user-read-email', 'user-read-private'];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}`;
