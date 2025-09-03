class Cliente {
    #cpf
    constructor(nome, sobrenome, cpf, endereco, telefone) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.#cpf = cpf
        this.telefone = telefone
        this.endereco = endereco

        this.getNome = function() { return this.nome }
        this.setNome = function(nome) { this.nome = nome }

        this.getNomeMaiusculo = function() { return this.nome.toUpperCase() }
        this.getNomeMinusculo = function() { return this.nome.toLowerCase() }

        this.getSobrenomeMaiusculo = function() { return this.sobrenome.toUpperCase() }
        this.getSobrenomeMinusculo = function() { return this.sobrenome.toLowerCase() }

        this.getCpf = function() { return this.#cpf }
    }

    getDados() {
        return "Cliente: " + this.nome + ", " + this.sobrenome +
        "\nCPF: " + this.getCpf() +
        "\nTelefone: (" + this.telefone.getDdd() + ") " + this.telefone.getNumeroTelefone() +
        "\nEndereço: " + this.endereco.getRua() + ", " + this.endereco.getNumero() + " - " +
        this.endereco.getCidade() + " / " + this.endereco.getEstado()
    }
}

class Telefone {
    constructor(ddd, numeroTelefone) {
        this.ddd = ddd
        this.numeroTelefone = numeroTelefone

        this.getDdd = function() { return this.ddd }
        this.setDdd = function(ddd) { this.ddd = ddd }

        this.getNumeroTelefone = function() { return this.numeroTelefone }
        this.setNumeroTelefone = function(numeroTelefone) { this.numeroTelefone = numeroTelefone }
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero

        this.getRua = function() { return this.rua }
        this.setRua = function(rua) { this.rua = rua }

        this.getRuaMaiusculo = function() { return this.rua.toUpperCase() }
        this.getRuaMinusculo = function() { return this.rua.toLowerCase() }

        this.getCidade = function() { return this.cidade }
        this.setCidade = function(cidade) { this.cidade = cidade }

        this.getCidadeMaiusculo = function() { return this.cidade.toUpperCase() }
        this.getCidadeMinusculo = function() { return this.cidade.toLowerCase() }

        this.getEstado = function() { return this.estado }
        this.setEstado = function(estado) { this.estado = estado }

        this.getNumero = function() { return this.numero }
        this.setNumero = function(numero) { this.numero = numero }
    }
}

class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj) {
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.#cnpj = cnpj
        this.clientes = []
    }

    getCnpj() { return this.#cnpj }

    adicionarCliente(cliente) {
        this.clientes.push(cliente)
    }

    getDados() {
        let dados = `Empresa: ${this.razaoSocial} (${this.nomeFantasia})\nCNPJ: ${this.getCnpj()}`
        dados += `\n\n--------------------------------\n\n`
        let clientesOrdenados = ordenarClientesPorNome(this.clientes)
        clientesOrdenados.forEach(c => {
            dados += c.getDados() + "\n\n"
        })
        return dados
    }
}

var empresa = new Empresa("Coelhos LTDA", "Casa dos Coelhos", '00000000')

var cli1 = new Cliente("José", "O coelho gordo", 10101010, new Endereco("SP", "São José dos Campos", "Engenheiro Jose Longo", 622), new Telefone(12, 11111111))
var cli2 = new Cliente("Dani", "A coelha medrosa", 12121212, new Endereco("SP", "São José dos Campos", "Engenheiro Jose Longo", 622), new Telefone(12, 22222222))
var cli3 = new Cliente("Amy", "A coelha exploradora", 13131313, new Endereco("SP", "São José dos Campos", "Engenheiro Jose Longo", 622), new Telefone(12, 33333333))
var cli4 = new Cliente("Frida", "A coelha destemida", 14141414, new Endereco("SP", "São José dos Campos", "Engenheiro Jose Longo", 622), new Telefone(12, 4444444))
var cli5 = new Cliente("Hanna", "O coelho curioso", 15151515, new Endereco("SP", "São José dos Campos", "Engenheiro Jose Longo", 622), new Telefone(12, 5555555))


empresa.adicionarCliente(cli1)
empresa.adicionarCliente(cli2)
empresa.adicionarCliente(cli3)
empresa.adicionarCliente(cli4)
empresa.adicionarCliente(cli5)

//Coloquei para ordenar os clientes por ordem alfabética dos nomes
function ordenarClientesPorNome(clientes) {
    return clientes.slice().sort(function(a, b) {
        return a.getNome().localeCompare(b.getNome());
    });
}

console.log(empresa.getDados())


