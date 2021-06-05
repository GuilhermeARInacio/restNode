const Servico = require('../models/servico')

module.exports = app => {

    app.get('/servicos/:id', (req, res) => {
        const id = parseInt(req.params.id)
 
        Servico.buscaPorId(id, res)
    })

    app.get('/servicos', (req, res) => {
        Servico.lista(res)
    })

    app.post('/servicos', (req, res) => {
        const servico = req.body

        Servico.adiciona(servico, res)    
    })
}