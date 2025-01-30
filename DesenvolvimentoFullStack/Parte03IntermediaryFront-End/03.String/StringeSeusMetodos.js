var nome = "Jhonnatan Willian";
var x = nome.length;
console.log(x);

resultado = x > 15 ? "Obrigado!" : "Por favor digite seu nome completo!";
console.log(resultado);

var res = nome.toLocaleUpperCase();
console.log(res);

var jogo = "Sport vs Outro";
var posicao = jogo.indexOf("Sport");
console.log(posicao);

var cortado = jogo.slice(0,5);
console.log(cortado);

var val = jogo.includes("Outro");
console.log(val);

var str1 = "Hello ";
var str2 = "World!";
var str3 = str1.concat(str2);
console.log(str3);

var frase = "         Pelo Sport nada?     ";
console.log(frase.trim());

var num = "1,2,3,4,5,6,7,8";
var arr = num.split(",");
console.log(arr);