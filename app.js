const app = require( './config/server' )
const socketIo = require('socket.io')

const server = app.listen( process.env.PORT, ( req, res ) => {
    console.log( 'Servidor online' )
})

const io = socketIo.listen( server )

app.set( 'io', io )

const socketEvents = socket => {
    console.log( 'Usuário conectou!' )
    
    socket.on( 'disconnect', () => console.log( 'Usuário desconectou!' ) )
}

io.on( 'connection', socketEvents )