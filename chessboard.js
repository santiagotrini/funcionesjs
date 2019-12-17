// Ejercicio 4 - chessboard
// Esta funcion devuelve un string que representa un tablero de ajedrez de n x n.
// Por ejemplo, llamando console.log(chessboard(4)) obtenemos el siguiente tablero
// * *
//  * *
// * *
//  * *
// formado por * y espacios representando cada casillero del tablero

// inserte solucion aqui
function chessboard(n) {
  let tablero = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if ((i + j) % 2 == 0) {
        tablero += '*';
      } else {
        tablero += ' ';
      }
    }
    tablero += '\n';
  }
  return tablero;
}

// no borrar esta linea
module.exports = chessboard;
