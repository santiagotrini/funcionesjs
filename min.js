// Ejercicio 5 - min
// Implementar la funcion min que tome como argumento un array de numeros
// y devuelva el menor de sus elementos

// inserte solucion aqui
function min(lista) {
  let menor = Infinity;
  for (let elemento of lista) {
    if (elemento < menor)
      menor = elemento;
  }
  return menor;
}

// no borrar esta linea
module.exports = min;
