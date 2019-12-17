// Ejercicio 3 - sum
// La suma de las potencias negativas de 2 es convergente
// Escribir una funcion que tome un argumento n (cantidad de terminos)
// y calcular la suma parcial de los primeros n terminos

// inserte solucion aqui
function sum(n) {
  let suma = 0;
  for (let i = 0; i < n; i++)
    suma = suma + (1 / Math.pow(2, i));
  return suma;  
}


// no borrar esta linea
module.exports = sum;
