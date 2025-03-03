function multiplicar(a,b){
    return a * b;

}

var x = multiplicar(2,3);

console.log(x);

function funcao(a,b=2,c=4){
    console.log(a + b + c);
}
funcao(2,6);

function teste(...args){
    console.log(args)
}

teste(2,5,6,8,9);