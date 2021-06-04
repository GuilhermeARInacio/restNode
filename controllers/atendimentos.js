
module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Rota de atendimentos! Você está realizando um get'))

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('Rota de Atendimentos! Você está realizando um post')
    })
}