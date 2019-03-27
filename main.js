'use strict';
const env = require('dotenv').config().parsed;
const WebServer = require('./src/WebServer/WebServer');

console.log('Mika Running');
WebServer.listen(env.WEBSERVER_PORT || 3000);