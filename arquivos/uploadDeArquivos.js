const fs = require('fs')
const path = require('path')

module.exports = (caminho, nomeArquiv, callbackImagemCriada) => {
    
    const tiposValidos = ['jpg', 'png', 'jpeg']
    const tipo = path.extname(caminho)
    const tipoIsValido = tiposValidos.indexOf(tipo.substring(1)) !== -1
    const novoCaminho =  `./assets/imagens/${nomeArquivo}${tipo}`
    
    if(tipoIsValido) {
        fs.createReadStream(caminho)
        .pipe(fs.createWriteStream(novoCaminho)) 
            .on('finish', () => callbackImagemCriada(false, novoCaminho))
    } else {
        const erro = "Tipo é inválido"
        console.log('Tipo inválido!')
        callbackImagemCriada(erro)
    }
}



