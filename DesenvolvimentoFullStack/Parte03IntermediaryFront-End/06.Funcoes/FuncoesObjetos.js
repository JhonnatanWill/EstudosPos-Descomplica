var pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

console.log(pessoa['sobrenome']);

var pessoa1 = new Object();
pessoa1.nome = "Angela";
pessoa1.sobrenome = "Silva";
pessoa1.falarNome = function(){
    console.log("Nome é: " + this.nome);
}

pessoa1.falarNome();

function criarPessoa(nome, sobrenome){
    return {nome,sobrenome};
};

var p1 = criarPessoa("Lucas", "Silva");
var p2 = criarPessoa("Arthur", "Almeida");

console.log(p1);