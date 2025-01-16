// Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.

function calcularNovoSalario(salarioAtual, percentualReajuste) {
    // Converte o percentual de reajuste para um valor decimal
    const percentual = percentualReajuste / 100;

    // Calcula o valor do reajuste
    const valorReajuste = salarioAtual * percentual;

    // Calcula o novo salário
    const novoSalario = salarioAtual + valorReajuste;

    // Retorna o novo salário
    return novoSalario;
}

// Exemplo de uso da função
const salarioAtual = 2500;
const percentualReajuste = 5;

const novoSalario = calcularNovoSalario(salarioAtual, percentualReajuste);

console.log("O novo salário é:", novoSalario);

// Faça um algoritmo que leia um número inteiro e que imprima o seu sucessor e seu antecessor.

function encontrarSucessorEAntecessor(numero) {
    // Verifica se o valor informado é um número
    if (typeof numero !== 'number') {
      console.error("Por favor, insira um número válido.");
      return;
    }
  
    // Calcula o sucessor e o antecessor
    const sucessor = numero + 1;
    const antecessor = numero - 1;
  
    // Imprime os resultados
    console.log(`O sucessor de ${numero} é ${sucessor}`);
    console.log(`O antecessor de ${numero} é ${antecessor}`);
}
 
// Exemplo de uso:
const numero = 10;
encontrarSucessorEAntecessor(numero);

// O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagam do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.

function calcularCustoFinal(custoFabrica) {
    // Valida se o valor informado é um número positivo
    if (custoFabrica <= 0) {
      console.error("O custo de fábrica deve ser um valor positivo.");
      return;
    }
  
    // Define os percentuais de distribuidor e impostos
    const percentualDistribuidor = 0.28;
    const percentualImpostos = 0.45;
  
    // Calcula o valor adicionado pelo distribuidor
    const valorDistribuidor = custoFabrica * percentualDistribuidor;
  
    // Calcula o valor dos impostos
    const valorImpostos = custoFabrica * percentualImpostos;
  
    // Calcula o custo final
    const custoFinal = custoFabrica + valorDistribuidor + valorImpostos;
  
    // Retorna o custo final
    return custoFinal;
}
 
// Exemplo de uso:
const custoFabrica = 100000; // Exemplo de custo de fábrica
const custoFinal = calcularCustoFinal(custoFabrica);
  
console.log("O custo final do carro é: R$", custoFinal.toFixed(2));