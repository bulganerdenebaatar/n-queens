/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme
  var matrix = new Board({n: n});
  var pieceCounter = 0;
  // console.log(matrix);
  var fullBoard = matrix.rows();

  //iterate over the board
  for (var r = 0; r < fullBoard.length; r++) {
    var currentRow = fullBoard[r];
    for (var c = 0; c < currentRow.length; c++) {
      matrix.togglePiece(r, c);
      //check
      if (matrix.hasAnyRooksConflicts()) {
        matrix.togglePiece(r, c);
      } else {
        pieceCounter ++;
        if (pieceCounter === n) {
          solution = fullBoard;
        }
      }
    }
  }

  //assign the solution to the matrix with the pieces placed.

  //place a rook starting at top left corner, after placement (and leaving piece there), always skip a row and start at column 0 of the new row

  //check if col or row conflict at current row/current piece

  //if there is a conflict, remove the piece

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var matrix = new Board({n: n});
  var pieceCounter = 0;
  // console.log(matrix);

  var columnCounter = 0;

  for (var i = 0; i < matrix.rows()[0].length; i++) {
    var fullBoard = [...matrix.rows()];
    for (var r = 0; r < fullBoard.length; r++) {
      var currentRow = fullBoard[r];
      for (var c = 0; c < currentRow.length; c++) {
        matrix.togglePiece(r, c);
        //check
        if (matrix.hasAnyRooksConflicts()) {
          matrix.togglePiece(r, c);
        } else {
          pieceCounter ++;
          if (pieceCounter === n) {
            solutionCount++;
          }
        }
      }
    }
  }
  // clear board
  // increment colcounter++
  // go throught the loop
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = 0; //fixme

  var matrix = new Board({n: n});
  var pieceCounter = 0;
  var fullBoard = matrix.rows();

  if (n === 0) {
    console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
    return solution;
  } else {
    for (var r = 0; r < fullBoard.length; r++) {
      var currentRow = fullBoard[r];
      for (var c = 0; c < currentRow.length; c++) {
        matrix.togglePiece(r, c);
        //check
        if (matrix.hasAnyQueensConflicts()) {
          matrix.togglePiece(r, c);
        } else {
          pieceCounter ++;
          if (pieceCounter === n) {
            solution = fullBoard;
          }
        }
      }
    }
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
