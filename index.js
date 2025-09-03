
class Cliente {
    #cpf
    constructor (nome, sobrenome, cpf, telefone, endereco) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.telefone = telefone
        this.endereco = endereco
        this.#cpf = cpf
        this.telefone = new Set()
        this.endereco = new Set()

        this.getNome = function() { return this.nome; };
        this.setNome = function(nome) { this.nome = nome; };

        this.getNomeMaiusculo = function() { return this.nome.toUpperCase(); };
        this.getNomeMinusculo = function() { return this.nome.toLowerCase(); };

         this.getDados = function () { 
        return "Cliente: " + this.nome + this.sobrenome +
        "\nTelefone: " + (this.telefone.getDdd ? this.telefone.getNumeroTelefone() : "Não informado") +
        "\nEndereço: " + this.endereco.getEstado() + ", " + this.endereco.getCidade() + this.endereco.getRua() + this.endereco.getNumero();
    };

    }

}

class Telefone {
    constructor(ddd, numeroTelefone) {
        this.ddd = ddd
        this.numeroTelefone = numeroTelefone

        this.getDdd = function() { return this.ddd; };
        this.setDdd = function(ddd) { this.ddd = ddd; };

        this.getNumeroTelefone = function() { return this.numeroTelefone; };
        this.setNumeroTelefone = function(numeroTelefone) { this.numeroTelefone = numeroTelefone; };

    }
}

class Endereco{
    constructor (estado, cidade, rua, numero){
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero

    this.getRua = function() { return this.rua; };
    this.setRua = function(rua) { this.rua = rua; };

    this.getRuaMaiusculo = function() { return this.rua.toUpperCase(); };
    this.getRuaMinusculo = function() { return this.rua.toLowerCase(); };

    this.getCidade = function() { return this.cidade; };
    this.setCidade = function(cidade) { this.cidade = cidade; };

    this.getCidadeMaiusculo = function() { return this.cidade.toUpperCase(); };
    this.getCidadeMinusculo = function() { return this.cidade.toLowerCase(); };

    this.getEstado = function() { return this.estado; };
    this.setEstado = function(estado) { this.estado = estado; };

    this.getNumero = function() { return this.numero; };
    this.setNumero = function(numero) { this.numero = numero; };

    }
}

class Empresa {
    #cnpj
    constructor (razaoSocial, nomeFantasia, cnpj) {
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.#cnpj = cnpj
    }
}

var empresa = new Empresa ("Coelhos LTDA", "Casa dos Coelhos", '00000000')

var cli1 = new Cliente ("José", "O coelho gordo", 10101010, Endereco)
var end1 = new Endereco ("SP", "São José dos Campos", "Engenheiro Jose Longo", 622)
var tel1 = new Telefone (12, 11111111)

var cli2 = new Cliente ("Dani", "A coelha medrosa", 12121212, Endereco)
var end2 = new Endereco ("SP", "São José dos Campos", "Engenheiro Jose Longo", 622)
var tel2 = new Telefone (12, 22222222)

var cli3 = new Cliente ("Amy", "A coelha exploradora", 13131313, Endereco)
var end3 = new Endereco ("SP", "São José dos Campos", "Engenheiro Jose Longo", 622)
var tel3 = new Telefone (12, 33333333)

var cli4 = new Cliente ("Frida", "A coelha destemida", 14141414, Endereco)
var end4 = new Endereco ("SP", "São José dos Campos", "Engenheiro Jose Longo", 622)
var tel4 = new Telefone (12, 4444444)

var cli5 = new Cliente ("Hanna", "O coelho curioso", 15151515, Endereco)
var end5 = new Endereco ("SP", "São José dos Campos", "Engenheiro Jose Longo", 622)
var tel5 = new Telefone (12, 5555555)

//Coloquei para ordenar pelo nome dos clientes

function ordenarClientesPorNome(clientes) {
    return clientes.slice().sort(function(a, b) {
        return a.getNome().localeCompare(b.getNome());
    });
}

var listaClientes = [cli1, cli2, cli3, cli4, cli5];
var listaOrdenada = ordenarClientesPorNome(listaClientes);

listaOrdenada.forEach(function(cliente) {
    console.log(cliente.getDados());
    console.log("\n");
});
