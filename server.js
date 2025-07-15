const { PeerServer } = require('peer');

const port = process.env.PORT || 9000;
const path = process.env.PEERJS_PATH || '/myapp';

const server = PeerServer({
  port,
  path,
  proxied: true // important for Render and other proxies
});

console.log(`PeerServer running on port ${port} at path ${path}`);
