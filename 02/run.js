const readline = require("readline");
const fs = require("fs");

function getNumber(number, array) {
  const x = Math.floor(number / 4);
  const y = number % 4;
  return array[x][y];
}

function setNumber(number, newNumber, array) {
  const x = Math.floor(number / 4);
  const y = number % 4;
  array[x][y] = newNumber;
}

function runCommand(chunkedArr) {
  const cloneArr = JSON.parse(JSON.stringify(chunkedArr));
  for (let ii = 0; ii < cloneArr.length; ii++) {
    const arr = cloneArr[ii];
    const number1 = getNumber(arr[1], cloneArr);
    const number2 = getNumber(arr[2], cloneArr);

    switch (arr[0]) {
      case 1:
        const newNumber1 = number1 + number2;
        setNumber(arr[3], newNumber1, cloneArr);
        break;
      case 2:
        const newNumber2 = number1 * number2;
        setNumber(arr[3], newNumber2, cloneArr);
        break;
      case 99:
        return cloneArr[0][0];
    }
  }
}

const readInterface = readline.createInterface({
  input: fs.createReadStream("./input.txt"),
  console: false
});

readInterface.on("line", function(line) {
  const splitArr = line.split(",");
  const modifiedArr = [];

  splitArr.forEach(x => {
    const val = parseInt(x, 10);
    modifiedArr.push(val);
  });

  modifiedArr[1] = 12;
  modifiedArr[2] = 2;

  let chunk = 4;
  let j = modifiedArr.length;

  const chunkedArr = [];

  for (let i = 0; i < j; i += chunk) {
    chunkedArr.push(modifiedArr.slice(i, i + chunk));
  }

  // Part 1
  console.log("Part 1: " + runCommand(chunkedArr));

  // Part 2
  for (let aa = 0; aa < 100; aa++) {
    for (let bb = 0; bb < 100; bb++) {
      const cloneArr = JSON.parse(JSON.stringify(chunkedArr));
      cloneArr[0][1] = aa;
      cloneArr[0][2] = bb;
      if (runCommand(cloneArr) === 19690720) {
        console.log("Part 2: " + (100 * aa + bb));
        break;
      }
    }
  }
});
