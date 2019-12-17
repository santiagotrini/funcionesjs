// Ejercicio 2 - quadratic
// La funcion quadratic toma 3 argumentos (a, b y c), los coeficientes
// de una funcion cuadratica y devuelve un array con las dos raices
// que se obtienen de la conocida formula

// inserte solucion aqui
function quadratic(a, b, c) {
  let raices = [];
  raices[0] = (-b + (Math.sqrt((b * b) - (4 * a * c)))) / (2 * a);
  raices[1] = (-b - (Math.sqrt((b * b) - (4 * a * c)))) / (2 * a);
  if (raices[1] == -0) raices[1] = 0;
  return raices;
}

// no borrar esta linea
module.exports = quadratic;
