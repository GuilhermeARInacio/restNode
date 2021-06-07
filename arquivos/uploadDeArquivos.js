const fs = require('fs')
const path = require('path')

module.exports = (caminho, nomeArquiv, callbackImagemCriada) => {
    
    const tiposValidos = ['jpg', 'png', 'jpeg']
    const tipo = path.extname(caminho)
    const tipoIsValido = tiposValidos.indexOf(tipo.substring(1))
    const novoCaminho =  `./assets/imagens/${nomeArquivo}${tipo}`
    
    if(tipoIsValido === -1) {
        console.log('Tipo inválido!')
    } else {
        fs.createReadStream(caminho)
        .pipe(fs.createWriteStream(novoCaminho)) 
            .on('finish', () => callbackImagemCriada())
    }
}



