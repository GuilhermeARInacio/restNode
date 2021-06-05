const moment = require('moment')
const { query } = require('../infraestrutura/conexao')

const conexao = require('../infraestrutura/conexao')

class Servico {
    adiciona(servico, res) {

        const sql = 'INSERT INTO Servico SET ?'

        conexao.query(sql, servico, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else{
                res.status(201).json({servico})
            }
        })
    }        
    
    lista(res) {
        const sql = 'SELECT * FROM Servico'

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM Servico WHERE id=${id}`
        
        conexao.query(sql, (erro, resultados) => {
            const servico = resultados[0]
            if(erro){
                res.status(400).json(erro)
            } else{
                res.status(200).json(servico)
            }
        })
    }
}

module.exports = new Servico