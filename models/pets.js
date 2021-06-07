const conexao = require('../infraestrutura/conexao')
const uploadDeArquivo = require('../arquivos/uploadDeArquivos')

class Pet {
    adiciona(pet) {
        const query = 'INSERT INTO Pets SET ?'

        uploadDeArquivo(pet.imagem, pet.nome, () => {
            const novoPet = {nome: pet.nome, imagem: novoCaminho}
            
            conexao.query(query, novoPet, () => {
                if(erro) {
                    console.log(erro)
                    res.status(400).json(erro)
                } else {
                    res.status(200).json(pet)
                }
            })
        })
    }
}

module.exports = new Pet()