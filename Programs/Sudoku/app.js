const letterMapRow1 = [];
const letterMapRow2 = [];
const letterMapRow3 = [];
const letterMapRow4 = [];
const letterMapRow5 = [];
const letterMapRow6 = [];
const letterMapRow7 = [];
const letterMapRow8 = [];
const letterMapRow9 = [];
const letterMapRows = [
  letterMapRow1,
  letterMapRow2,
  letterMapRow3,
  letterMapRow4,
  letterMapRow5,
  letterMapRow6,
  letterMapRow7,
  letterMapRow8,
  letterMapRow9,
];

function generateLetterMap() {
  // Result:
  // ['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C']
  // ['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C']
  // ['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C']
  // ['D', 'D', 'D', 'E', 'E', 'E', 'F', 'F', 'F']
  // ['D', 'D', 'D', 'E', 'E', 'E', 'F', 'F', 'F']
  // ['D', 'D', 'D', 'E', 'E', 'E', 'F', 'F', 'F']
  // ['G', 'G', 'G', 'H', 'H', 'H', 'I', 'I', 'I']
  // ['G', 'G', 'G', 'H', 'H', 'H', 'I', 'I', 'I']
  // ['G', 'G', 'G', 'H', 'H', 'H', 'I', 'I', 'I']

  let squareLetter1 = "";
  let squareLetter2 = "";
  let squareLetter3 = "";

  for (let i = 0; i < 9; i++) {
    if (i < 3) {
      (squareLetter1 = "A"), (squareLetter2 = "B"), (squareLetter3 = "C");
    }
    if (i < 6 && i > 2) {
      (squareLetter1 = "D"), (squareLetter2 = "E"), (squareLetter3 = "F");
    }
    if (i > 5) {
      (squareLetter1 = "G"), (squareLetter2 = "H"), (squareLetter3 = "I");
    }
    letterMapRows[i].push(squareLetter1, squareLetter1, squareLetter1);
    letterMapRows[i].push(squareLetter2, squareLetter2, squareLetter2);
    letterMapRows[i].push(squareLetter3, squareLetter3, squareLetter3);
  }
}

let square1 = [];
let square2 = [];
let square3 = [];
let square4 = [];
let square5 = [];
let square6 = [];
let square7 = [];
let square8 = [];
let square9 = [];
let square = [
  square1,
  square2,
  square3,
  square4,
  square5,
  square6,
  square7,
  square8,
  square9,
];

function convertRowsIntoSquares(...rows) {
  for (let i = 0; i < 3; i++) {
    square1.push(rows[i][0]);
    square1.push(rows[i][1]);
    square1.push(rows[i][2]);

    square2.push(rows[i][3]);
    square2.push(rows[i][4]);
    square2.push(rows[i][5]);

    square3.push(rows[i][6]);
    square3.push(rows[i][7]);
    square3.push(rows[i][8]);
  }
  for (let i = 3; i < 6; i++) {
    square4.push(rows[i][0]);
    square4.push(rows[i][1]);
    square4.push(rows[i][2]);

    square5.push(rows[i][3]);
    square5.push(rows[i][4]);
    square5.push(rows[i][5]);

    square6.push(rows[i][6]);
    square6.push(rows[i][7]);
    square6.push(rows[i][8]);
  }
  for (let i = 6; i < 9; i++) {
    square7.push(rows[i][0]);
    square7.push(rows[i][1]);
    square7.push(rows[i][2]);

    square8.push(rows[i][3]);
    square8.push(rows[i][4]);
    square8.push(rows[i][5]);

    square9.push(rows[i][6]);
    square9.push(rows[i][7]);
    square9.push(rows[i][8]);
  }
}

function findElementsRespectiveSquare(rowNumber, rowElementIndex) {
  let squareIndex = letterMapRows[rowNumber][rowElementIndex];
  let thisSquare = [];
  switch (squareIndex) {
    case "A":
      thisSquare = [...square[0]];
      break;
    case "B":
      thisSquare = [...square[1]];
      break;
    case "C":
      thisSquare = [...square[2]];
      break;
    case "D":
      thisSquare = [...square[3]];
      break;
    case "E":
      thisSquare = [...square[4]];
      break;
    case "F":
      thisSquare = [...square[5]];
      break;
    case "G":
      thisSquare = [...square[6]];
      break;
    case "H":
      thisSquare = [...square[7]];
      break;
    case "I":
      thisSquare = [...square[8]];
      break;
  }
  thisSquare = thisSquare.filter((a) => a !== "x");
  return thisSquare;
}

function excludeDigitsPresentInSquare(pool, rowNumber, rowElementIndex) {
  pool = pool.filter(
    (val) =>
      !findElementsRespectiveSquare(rowNumber, rowElementIndex).includes(val)
  );
  return pool;
}

function excludeDigitsPresentInRow(pool, rowNumber, givenRows) {
  let row = givenRows[rowNumber];
  pool = pool.filter((val) => !row.includes(val));
  return pool;
}

function excludeDigitsPresentInColumn(pool, givenRows, rowElementIndex) {
  let pool2 = [...pool];
  for (let row of givenRows) {
    indexHolder = pool2.indexOf(row[rowElementIndex]);
    if (indexHolder !== -1) {
      pool2.splice(indexHolder, 1);
    }
  }
  return pool2;
}

function checkIfSudokuSolved(givenRows) {
  for (let row of givenRows) {
    if (row.indexOf("x") !== -1) {
      return "unsolved";
    }
  }
  return "solved";
}

function sudokuSolver(rows) {
  let pool = [...numberPool];
  let pool1 = [];
  let pool2 = [];
  let pool3 = [];
  let rowNumber = -1;
  for (let row of rows) {
    rowNumber += 1;
    for (let i = 0; i < 9; i++) {
      pool = [...numberPool];
      if (row[i] === "x") {
        pool1 = excludeDigitsPresentInSquare(pool, rowNumber, i);
        pool2 = excludeDigitsPresentInRow(pool1, rowNumber, rows);
        pool3 = excludeDigitsPresentInColumn(pool2, rows, i);
        if (pool3.length === 1) {
          row[i] = pool3[0];
        }
      }
    }
  }
}

function solveSudoku(rows) {
  let counter = 0;
  console.log("Input sudoku board:");
  console.log(`|${rows[0].toString()}|`);
  console.log(`|${rows[1].toString()}|`);
  console.log(`|${rows[2].toString()}|`);
  console.log(`|${rows[3].toString()}|`);
  console.log(`|${rows[4].toString()}|`);
  console.log(`|${rows[5].toString()}|`);
  console.log(`|${rows[6].toString()}|`);
  console.log(`|${rows[7].toString()}|`);
  console.log(`|${rows[8].toString()}|`);

  generateLetterMap();
  convertRowsIntoSquares(...rows);
  while (checkIfSudokuSolved(rows) !== "solved" && counter < 100) {
    counter += 1;
    sudokuSolver(rows);
  }

  if (counter < 100) {
    console.log("---------------------------");
    console.log(`Sudoku solved in ${counter} iterations, result:`);
    console.log(`|${rows[0].toString()}|`);
    console.log(`|${rows[1].toString()}|`);
    console.log(`|${rows[2].toString()}|`);
    console.log(`|${rows[3].toString()}|`);
    console.log(`|${rows[4].toString()}|`);
    console.log(`|${rows[5].toString()}|`);
    console.log(`|${rows[6].toString()}|`);
    console.log(`|${rows[7].toString()}|`);
    console.log(`|${rows[8].toString()}|`);
  } else console.log("Sorry, too complex example or invalid format.");
}

let numberPool = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Input sudoku board
let row1 = [7, "x", 4, 8, "x", "x", 3, "x", 1];
let row2 = [8, 2, "x", 5, "x", "x", "x", 4, "x"];
let row3 = ["x", "x", 9, 4, 3, "x", 5, "x", "x"];
let row4 = [3, 1, "x", "x", "x", "x", 8, "x", 7];
let row5 = ["x", 8, "x", "x", "x", "x", "x", 1, "x"];
let row6 = [9, "x", 7, "x", "x", "x", "x", 3, 2];
let row7 = ["x", "x", 6, "x", 1, 5, 4, "x", "x"];
let row8 = ["x", 7, "x", "x", "x", 9, "x", 6, 5];
let row9 = [5, "x", 8, "x", "x", 2, 1, "x", 3];
let rows = [row1, row2, row3, row4, row5, row6, row7, row8, row9];

solveSudoku(rows);
