'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

class WebServer {
    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        //body parser
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(bodyParser.json());

        //ejs
        this.express.set('views', path.join(__dirname, 'Templates'));
        this.express.set('view engine', 'ejs');
        this.express.use(express.static(path.join(__dirname, '../../public')));

        //assets
        const assets = require('./Middlewares/ResolveAssetsMiddleware')();
        this.express.locals.assets;
        this.express.use((req,res,next) => {
            this.express.locals.path = req.path;
            next();
        });
    }

    routes() {
        this.express.use(require("./routes"));
    }
}

module.exports = new WebServer().express;