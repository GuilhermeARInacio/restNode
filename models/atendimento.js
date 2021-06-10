const { default: axios } = require('axios')
const moment = require('moment')
const { query } = require('../infraestrutura/database/conexao')
const conexao = require('../infraestrutura/database/conexao')
const repositorio = require('../repositorios/atendimento')
class Atendimento {
    constructor() {
        this.dataIsValid = ({data, dataCriacao}) => moment(data).isSameOrAfter(dataCriacao)
        this.clienteIsValid = (tamanho) => tamanho >= 5

        this.valida = (parametros) => this.validations.filter(campo => {
            const { nome } = campo
            const parametro = parametros[nome]

            return !campo.valido(parametro)
        })

        this.validations = [
            {
                nome: 'Data',
                valido: this.dataIsValid,
                mensagem: 'Data deve ser maior ou igual a data atual!'
            },
            {
                nome: 'Cliente',
                valido: this.clienteIsValid,
                mensagem: 'Cliente deve ter pelo menos 5 caracteres!'
            }
        ]
    }

    adiciona(atendimento) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')

        const parametros = {
            data: {data, dataCriacao},
            cliente: { tamanho: atendimento.cliente.length}
        }

        const erros = this.valida(parametros)
        const existErrors = erros.length

        if(existErrors) {
            return new Promise((reject) => reject(erros))
        } else{
            const atendimentoDatado = {...atendimento, dataCriacao, data}
            
            return repositorio.adiciona(atendimentoDatado).then((resultados) => {
                const id = resultados.insertId
                return { ...atendimento, id} 
            })
        }        
    }    

    lista() {
        return repositorio.lista()
    }

    buscaPorId(id) {
        const sql = `SELECT * FROM atendimentos WHERE id=${id}`
        
        conexao.query(sql, async (erro, resultados) => {
            const atendimento = resultados[0]
            const cpf = atendimento.cliente
            if(erro){
                res.status(400).json(erro)
            } else{
                const { data } = await axios.get(`http://localhost:8082/${cpf}`)
                atendimento.cliente = data
                res.status(200).json(atendimento)
            }
        })
    }

    altera(id, valores, res) {
        if(valores.data) {
            
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }

        const sql = 'UPDATE Atendimentos SET ? WHERE id=?'
        
        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
        })
    }

    deleta(id) {
        return repositorio.deleta(id)
    }
}


module.exports = new Atendimento