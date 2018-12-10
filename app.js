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
    
    socket.on( 'msgParaServidor', ( data ) => {
        
        socket.emit( 'msgParaClient', {
            apelido: data.apelido,
            mensagem: data.mensagem
        })
        
        socket.broadcast.emit( 'msgParaClient', {
            apelido: data.apelido,
            mensagem: data.mensagem
        })
       
       if ( parseInt( data.mensagemEfetuadaParticipante ) === 0 ){
           
            socket.emit( 'participantesParaClient', {
                apelido: data.apelido
            })
            
            socket.broadcast.emit( 'participantesParaClient', {
                apelido: data.apelido
            })
       }
        
    })
}

io.on( 'connection', socketEvents )