module.exports.iniciaChat = ( application, req, res ) => {
    
    const dadosForm = req.body
    
    req.assert( 'apelido', 'Nome ou apelido é obrigatório' ).notEmpty()
    req.assert( 'apelido', 'Nome ou apelido deve ter entre 3 a 15 caracteres' ).len( 3, 15 )
    
    const errors = req.validationErrors()
    
    if ( errors ) {
        res.render( 'index', {validacao: errors} )
        return;
    }
    
    res.render( 'chat' )
}