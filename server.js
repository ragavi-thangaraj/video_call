const express = require('express');
const { PeerServer } = require('peer');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 9000;
const path = process.env.PEERJS_PATH || '/peerjs';

app.use(cors()); // Enable CORS for all HTTP routes

const peerServer = PeerServer({
  path,
  proxied: true // Important for Render and reverse proxies
});

app.use(path, peerServer);

app.listen(port, () => {
  console.log(`PeerServer running on port ${port} at path ${path}`);
});
