var pais = "Braisl";

if(pais != "Brasil"){
    console.log("Você é estrangeiro!")
}else{
    console.log("Você é Brasileiro!")
}

var idade = 22;

if(idade < 16){
    console.log("Não vota")
}else if(idade < 18 || idade > 65){
    console.log("Voto opcional")
}else{
    console.log("Voto obrigatório")
}