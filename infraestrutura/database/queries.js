const { query } = require('./conexao')
const conexao = require('./conexao')

const executaQuery = (query, parametros = '') => {
    return new Promise((resolve, reject) => {
        conexao.query(query, parametros, (erro, resultados, campos) => {
            if(erros) {
                reject(erros)
            } else {
                resolve(resultados)
            }
        })
    })
}

module.exports = executaQuery