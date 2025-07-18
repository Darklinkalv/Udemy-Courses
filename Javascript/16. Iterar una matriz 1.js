//Iterar una matriz 1
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]];

//Numeros de filas
console.log(matriz.length);

//Numeros de columnas
console.log(matriz[0].length);
console.log(matriz[1].length);

//Renglones
for (let i = 0; i < matriz.length; i++) {
    //Columnas
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
}