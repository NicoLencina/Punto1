let dimension: number = 0;
let numerosAleatorios: number[] = new Array(dimension);
let mayorOk: number;

//carga numero aleatorios en el array
function nAleatorios(dimension: number) {
  for (let index = 0; index < dimension; index++) {
    numerosAleatorios[index] = Math.floor(Math.random() * 1000);
  }
  return numerosAleatorios;
}

//analizo el array completo buscando el menor
function buscoMenor(numerosAleatorios: number[]) {
  let mayor: number = 0;
  for (let index = 0; index < numerosAleatorios.length; index++) {
    if (numerosAleatorios[index] > mayor) {
      mayor = numerosAleatorios[index];
    }
  }
  mayorOk = mayor;
}
//imprimo resultados por consola
function imprimirresultados(mayor: number, numerosAleatorios: number[]) {
  console.log("El menor dato del arreglo es: ", mayor);
  console.log("El arreglo es: ", numerosAleatorios);
}

//llamo y uso de funciones
dimension = Number(prompt("Ingrese la dimension"));
nAleatorios(dimension);
buscoMenor(numerosAleatorios);
imprimirresultados(mayorOk, numerosAleatorios);
