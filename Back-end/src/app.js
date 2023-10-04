const express  = require('express');
const router = require('./router');
const app = express();
app.use(express.json());
var cors = require('cors');

app.use(cors());
app.use(router);

module.exports = app;