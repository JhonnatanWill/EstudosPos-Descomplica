var a = [10,20,30,40,50,60];

for (let valor of a){
    console.log(valor);
}

a.forEach(valor => console.log(valor+1));

var tot = 0;
a.forEach(valor => {
    tot += valor;
});

console.log(tot);

a.forEach(function(valor,indice,array){
    console.log(array[indice]);
});
