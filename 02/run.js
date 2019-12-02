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

  for (let ii = 0; ii < chunkedArr.length; ii++) {
    const arr = chunkedArr[ii];
    const number1 = getNumber(arr[1], chunkedArr);
    const number2 = getNumber(arr[2], chunkedArr);

    switch (arr[0]) {
      case 1:
        const newNumber1 = number1 + number2;
        setNumber(arr[3], newNumber1, chunkedArr);
        break;
      case 2:
        const newNumber2 = number1 * number2;
        setNumber(arr[3], newNumber2, chunkedArr);
        break;
      case 99:
        console.log(chunkedArr[0][0]);
        return;
    }
  }
});
