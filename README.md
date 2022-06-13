# About MyTunes2.0
MyTunes 2.0 is a music review sharing app that allows one to log in with their Spotify account, search music, write review/rating, follow other users, and receive feeds from those they follow. 

Note that it is an iteration of [MyTunes1.0](https://github.com/CASM-Codesmith/MyTunes)

# Screenshots

### Landing Page
![landing.png](https://i.postimg.cc/KYdJK4vY/landing.png)

### Dashboard
![dashboard.png](https://i.postimg.cc/WzV8nKZL/dashboard.png)

### Search
![search.gif](https://i.postimg.cc/qMRyT44D/search.gif)

### View Playlist
![view-Playlist.png](https://i.postimg.cc/B6HN2sXB/view-Playlist.png)

### Review Form
![review-Form.png](https://i.postimg.cc/cLkDSXpw/review-Form.png)

### Add Review
![add-Review.gif](https://i.postimg.cc/P5vDCyLm/add-Review.gif)

### My Reviews
![my-Reviews.png](https://i.postimg.cc/43KWNpGM/my-Reviews.png)

### Follows
![Follow-edited.png](https://i.postimg.cc/90sQLxHV/Follow-edited.png)

### Feeds
![Feeds-edited.png](https://i.postimg.cc/vBqBVYP4/Feeds-edited.png)


# Built With
- [React.js](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Material-UI](https://mui.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Spotify Web Api Node](https://www.npmjs.com/package/spotify-web-api-node)
- [Node.js](https://nodejs.org/en/)


# Getting Started
To get a local copy up and running follow these simple steps.
1. Clone the repo
```
  git clone https://github.com/ACJM-myTunes/MyTunes-v2.git
```
2. Install NPM packages
```
  npm install
```
3. Create a `.env` file in the root directory and paste in the following
``` 
  SPOTIFY_CLIENT_ID='YOUR SPOTIFY CLIENT ID'
  SPOTIFY_CLIENT_SECRET= 'YOUR SPOTIFY CLIENT SECRET'
  PG_URI ='YOUR POSTGRESQL URI'
```
4. In the terminal, run `npm run dev` and go to http://localhost:8080 to access the application





