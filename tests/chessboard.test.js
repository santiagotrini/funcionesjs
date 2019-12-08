const chessboard = require('../chessboard');

test('chessboard(8) to be right board', () => {
  expect(chessboard(8)).toBe('* * * * \n * * * *\n* * * * \n * * * *\n* * * * \n * * * *\n* * * * \n * * * *\n');
});

test('chessboard(2) to be right board', () => {
  expect(chessboard(2)).toBe('* \n *\n');
});

test('chessboard(4) to be right board', () => {
  expect(chessboard(4)).toBe('* * \n * *\n* * \n * *\n');
});
