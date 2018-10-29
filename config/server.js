const express = require( 'express' )

const expressValidator = require( 'express-validator' )

const bodyParser = require( 'body-parser' )

const consign = require( 'consign' )

const app = express();

app.set( 'view engine', 'ejs' )
app.set( 'views', './app/views' )

app.use( express.static( './app/public' ) )

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

consign().include( './app/routes' )
          .then( './app/models' )
          .then( './app/controllers' )
          .into( app )

module.exports = app
