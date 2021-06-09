const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect((erro) => {
//    if(erro) {
//        console.log(erro)
//    } else {
        console.log('Connected!')

        //Tabelas.init(conexao)
        const app = customExpress()

        app.listen(3000, () => console.log('Server listen in port 3000'))
//    }
})
