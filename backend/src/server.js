const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const config = require('./config');
const cors = require('cors');

const server = express();

mongoose.connect(config.db.url, {
useNewUrlParser: true,
useUnifiedTopology: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);