// Para fazer uma promoção, os comerciantes estão procurando aumentar suas vendas oferecendo desconto. Faça um algoritmo que possa receber um valor de um produto e que escreva o novo valor tendo em vista que o desconto foi de 9%.

function calcularValorComDesconto(valorOriginal) {
    // Verifica se o valor informado é um número positivo
    if (valorOriginal <= 0) {
      console.error("O valor original deve ser um número positivo.");
      return;
    }
  
    // Define o percentual de desconto
    const percentualDesconto = 9;
  
    // Calcula o valor do desconto
    const valorDesconto = valorOriginal * (percentualDesconto / 100);
  
    // Calcula o valor final com desconto
    const valorFinal = valorOriginal - valorDesconto;
  
    // Retorna o valor final
    return valorFinal;
}
  
// Exemplo de uso:
const valorProduto = 100; // Valor original do produto
const valorComDesconto = calcularValorComDesconto(valorProduto);
  
console.log("O valor do produto com desconto é: R$", valorComDesconto.toFixed(2));

// Faça um algoritmo que efetue o cálculo da quantidade de litros de combustível gastos em uma viagem, sabendo-se que o carro faz 12 kKm com um litro. Deveram ser fornecidos o tempo gasto na viagem e a velociadade média. Utilizar as seguintes formulas: distância = tempo * velocidade e litros usados = distancia / 12.

function calcularConsumoCombustivel(tempoViagem, velocidadeMedia) {
    // Validação dos dados de entrada
    if (tempoViagem <= 0 || velocidadeMedia <= 0) {
      console.error("O tempo de viagem e a velocidade média devem ser valores positivos.");
      return;
    }
  
    // Consumo do veículo (km/l)
    const consumoVeiculo = 12; // Assumindo que o carro faz 12 km/l
  
    // Cálculo da distância percorrida
    const distanciaPercorrida = tempoViagem * velocidadeMedia;
  
    // Cálculo da quantidade de litros consumidos
    const litrosConsumidos = distanciaPercorrida / consumoVeiculo;
  
    // Retorna a quantidade de litros consumidos
    return litrosConsumidos;
}
  
// Exemplo de uso:
const tempoViagemHoras = 3; // Tempo da viagem em horas
const velocidadeMediaKmH = 80; // Velocidade média em km/h
const distanciaPercorrida = velocidadeMediaKmH * tempoViagemHoras;
  
const litrosConsumidos = calcularConsumoCombustivel(tempoViagemHoras, velocidadeMediaKmH);
  
console.log("A quantidade de litros consumidos na viagem foi:", litrosConsumidos.toFixed(2));