'use strict';

//Babel hook for es6 and jsx support
require('babel/register');

var Hapi = require('hapi');
var Routes = require('./routes');
var mongoose = require('mongoose');

//A custom view handler to serve react views. Simpler version of hapi-react-views
var ReactViews = require('./server/handler/react-view');

// Get application configuration from the config file
var config = require('./config/config');


//Callback: Create mongoose listener to start the web server on successful db connection.
//Note that we are using "once" instead of "on"
//This will make sure that this listener will get executed only the first time the connection is successful.
mongoose.connection.once('connected', function (ref) {

    console.log("Connected to db server. Now starting the app server.")

    // Create a server with a host and port
    var server = new Hapi.Server();
    server.connection({
        host: config.server.host,
        port: config.server.port
    });


    // Set logging options
    var loggingOptions = {
        opsInterval: 1000,
        reporters: [{
            reporter: require('good-console'),
            events: {log: '*', response: '*'}
        }, {
            reporter: require('good-file'),
            events: {log: '*', response: '*'},
            config: {
                path: config.logging.path,
                prefix: config.logging.prefix,
                rotate: config.logging.rotate
            }
        }]
    };

    // Start the server after registering the logging configuration
    server.register([
        {
            register: require('good'),
            options: loggingOptions
        },
        {
            register: require('vision')
        },
        {
            register: require('inert')
        }
    ], function (err) {

        if (err) {
            server.log(err);
        }
        else {

            // Add server routes from the routes file
            server.route(Routes.endpoints);


            server.views({
                engines: {
                    jsx: ReactViews
                },
                compileOptions: {renderMethod: 'renderToString'},
                relativeTo: __dirname,
                path: 'server/web'
            });

            server.start(function () {
                server.log('Server started at ' + server.info.uri);
            });
        }
    });

});

// Callback: If the connection throws an error
mongoose.connection.on("error", function(err) {
    console.error('Failed to connect to DB  on startup ', err);
});

// Callback: When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection to DB  disconnected');
});

var gracefulExit = function() {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection with DB is disconnected through app termination');
        process.exit(0);
    });
}

// Callback: If the Node process ends, close the Mongoose connection
process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);

//Finally time to start the server.
//We will connect to database. If the connection to database is successful, it will call
//the mongoose.connection.once('connected listener that would in turn start the web server
var uri = 'mongodb://' + config.database.username + ':' + config.database.password +
    '@' + config.database.host + ':' + config.database.port +
    '/' + config.database.db;

try {
    mongoose.connect(uri);
} catch (err) {
    console.log("Server initialization failed " , err.message);
}




