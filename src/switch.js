
let misses = 0;
let hits = 0;
let change = 0;

function switchDifficulty () {
  if (hits === 4 && change < 2) {
    change++;
    hits = 0;
  } else if (misses === 2 && change > 0) {
    change--;
    hits = 0;
    misses = 0;
  } else if (hits === 4 && change === 2) {
    hits = 0;
  } else if (misses === 2 && change === 0) {
    hits = 0;
    change = 0;
  }
}


// change game Mode
// let chosenEnemies = [];
// let gameMode = 'subtraction';
//
// function chooseGameMode () {
// // let chosenEnemies = subtractionEnemies;
// console.log(gameMode);
//
//   if (gameMode === "addition") {
//     chosenEnemies = additionEnemies;
//   } else if (gameMode === "subtraction") {
//     chosenEnemies = subtractionEnemies
//   } else if (gameMode === "division") {
//     chosenEnemies = divisionEnemies
//   } else if (gameMode === "multiplication") {
//     chosenEnemies = multiplicationEnemies
//   }
// }
//
// function chooseAddition () {
//   gameMode = "addition";
//   // chooseGameMode();
//   console.log(gameMode);
//   // closeGmMenu();
//   console.log(chosenEnemies);
// }
//
//
// function chooseSubtraction () {
//   gameMode = "subtraction";
//   // chooseGameMode();
//   console.log(gameMode);
//   // closeGmMenu();
//   console.log(chosenEnemies)
// };
//
// function chooseDivision () {
//   gameMode = "Division";
//   // chooseGameMode();
//   // closeGmMenu();
//   console.log(chosenEnemies)
//   console.log(gameMode);
// };
//
// function chooseMultiplication () {
//   gameMode = "Multiplication";
//
//
//   // closeGmMenu();
//   console.log(chosenEnemies)
//   console.log(gameMode);
// }

function test1 () {
  console.log('test');
}

// document.addEventListener('DOMContentLoaded', () => {
// document.getElementById('additionButton').addEventListener('click', test1);
// document.getElementById('subtractionButton').addEventListener('click', chooseSubtraction());
// document.getElementById('divisionButton').addEventListener('click', chooseDivision);
// document.getElementById('multiplicationButton').addEventListener('click', chooseMultiplication);
// })
