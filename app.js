const app = require( './config/server' )

app.listen( process.env.PORT, ( req, res ) => {
    console.log( 'Servidor online' )
})