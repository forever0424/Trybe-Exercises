let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let array = [];

for (let index = 1; index <= numbers.length; index += 1) {
  for (let secondIndex = index - 1; secondIndex < index; secondIndex += 1) {
    if (numbers[index] !== undefined) {
      array.push(numbers[secondIndex] * numbers[index]);
    }
    else {
      array.push(numbers[secondIndex] * 2);
    }
  }
}

console.log(array);