var carros = [
    {id: 1, modelo: 'Audio A3', marca: 'Audi', ano: 2020},
    {id: 2, modelo: 'Compass', marca: 'Jeep', ano: 2021}
]

for (let caracteristica in carros){
    console.log(carros[caracteristica]);
}

/*
for(var i = 0; i < carros.length; i++){
    total += carros[i].ano
}

for(const i in carros){
    total += carros[i].ano
}

for(const carro of carros) {
    total += carro.ano
}
*/