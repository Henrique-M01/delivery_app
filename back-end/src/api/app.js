const express = require('express');
const cors = require('cors');

const {
  loginRoute,
  registerRoute,
} = require('../routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/login', loginRoute);
app.use('/register', registerRoute);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
