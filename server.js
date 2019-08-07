const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
// let next handle all the requests that comes to our app
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  /* MIDDLEWARE */
  // use middleware so it can handle json form data
  server.use(express.json());

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err; // throw error if caught
    console.log(`Listening on port ${port}`);
  });
});
