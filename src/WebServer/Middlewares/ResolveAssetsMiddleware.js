assets = function(assets) {
    if( process.env.WEBSERVER_HOST === 'localhost' ){
        return (process.env.WEBSERVER_PROTOCOL + '://' + process.env.WEBSERVER_HOST + ':' + process.env.WEBSERVER_PORT + '/' + assets);
    }else{
        return (process.env.WEBSERVER_HOST + '/' + assets);
    }
};
module.exports = assets;