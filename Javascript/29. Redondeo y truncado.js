//Redondeo y truncado de numeros

let numero = 8.5, redondeo, truncado;

//Redondeo
//Math.round() redondea al entero más cercano
//.5 o superior, redondea al valor entero superior mas cercano
redondeo = Math.round(numero);
console.log(`Redondeo de ${numero} es: ${redondeo}`);

//Truncado
//Math.trunc() elimina la parte decimal del número
//No redondea, simplemente corta la parte decimal
truncado = Math.trunc(numero);
console.log(`Truncado de ${numero} es: ${truncado}`);