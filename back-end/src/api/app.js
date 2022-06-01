const express = require('express');
const cors = require('cors');

const {
  loginRoute, 
  registerRoute,
  productsRoute,
  sellersRoute,
} = require('../routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/products', productsRoute);
app.use('/sellers', sellersRoute);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
