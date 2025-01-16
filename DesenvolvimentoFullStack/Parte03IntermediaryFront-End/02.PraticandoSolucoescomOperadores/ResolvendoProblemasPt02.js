// Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final desse aluno. Consciderar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fómula final para o cálculo da média é: media final = n1 * 2 + n2 * 3 + n3 * 5 / 10.

function calcularMediaPonderadaNotas(nota1, nota2, nota3) {
    // Verifica se as notas são números válidos
    if (typeof nota1 !== 'number' || typeof nota2 !== 'number' || typeof nota3 !== 'number') {
      console.error("As notas devem ser números.");
      return;
    }
  
    // Calcula a média ponderada utilizando a fórmula fornecida
    const media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;
  
    // Retorna a média calculada
    return media;
}
  
// Exemplo de uso:
const nota1 = 8;
const nota2 = 7;
const nota3 = 9;
  
const mediaFinal = calcularMediaPonderadaNotas(nota1, nota2, nota3);
  
console.log("A média final do aluno é:", mediaFinal);

// Faça um algoritmo que leia quatro números informados pelo usuário e que depois imprima a média ponderada, sabendo-se que os pesos são respectivamente: 1, 2, 3 e 4.

function calcularMediaPonderadaNumeros(numA, numB, numC, numD) {
    // Verifica se as notas são números válidos
    if (typeof numA !== 'number' || typeof numB !== 'number' || typeof numC !== 'number' || typeof numD !== 'number') {
      console.error("As notas devem ser números.");
      return;
    }
  
    // Calcula a média ponderada utilizando a fórmula fornecida
    const media = (numA * 1 + numB * 2 + numC * 3 + numD * 4) / 10;
  
    // Retorna a média calculada
    return media;
}
  
// Exemplo de uso:
const numA = 5;
const numB = 4;
const numC = 7;
const numD = 8;
  
const mediaNunFinal = calcularMediaPonderadaNumeros(numA, numB, numC, numD);
  
console.log("A média ponderada é:", mediaNunFinal);