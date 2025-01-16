var n = 42;
console.log(typeof(n));

var m = new Array();
console.log(typeof(m));

//Serve para identificar o tipo de vareável solicitada.

if(typeof(n) == "string"){
    console.log(n.toLocaleUpperCase());
}else{
    console.log("Voçê precisa usar uma String!")
}
