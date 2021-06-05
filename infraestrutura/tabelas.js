class tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarAtendimentos()
        this.criarServico()
    }

    criarAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS ATENDIMENTOS (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            } else {
                console.log('Tabela de atendimentos está ok!')
            }
        })
    }

    criarServico() {
        const sql = 'CREATE TABLE IF NOT EXISTS SERVICO (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, preco varchar(20) NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            } else {
                console.log('Tabela de serviços está ok!')
            }
        })
    }
}

module.exports = new tabelas