'use strict'

var restify = require('restify');
var mongoose = require('mongoose');

//Define node env mode
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//initializate config
var config = require('./config/config');

//define mongoDB
var dbMongo = mongoose.connect(config.dbMongo);

//initializate restify server
var server = restify.createServer({
  name: config.app.name,
});

//  Restify routes settings
require('./config/system/routes')( server );

//  Restify models settings
require('./config/system/models')( server );

var port = process.env.PORT || config.port;

server.listen( port, function() {
    logger.info( 'Inicializando API url: ' + server.url + ' name: ' + server.name + ' pid: ' + process.pid + ' env: ' + process.env.NODE_ENV );
});
