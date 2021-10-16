/* 1ª */
function verifyPalindrome(str) {
  // let splitStr = str.split("");
  // let reverseArr = splitStr.reverse();
  // let joinArr = reverseArr.join("");
  let reversed = str.split('').reverse().join('');
  if(str === reversed) {
    return true;
  } else {
    return false;
  }
}

console.log(verifyPalindrome('arara'));

/* 2ª */
function indexOfGreatestValue(arr) {
  let greatest = arr[0];
  for(let i of arr) {
    if(i > greatest) {
      greatest = i;
    }
  }
  return arr.indexOf(greatest);
}

console.log(indexOfGreatestValue([2, 3, 6, 7, 10, 1]));

/* 3ª */
function indexOfLowestValue(arr) {
  let lowest = arr[0];
  for(let i of arr) {
    if(i < lowest) {
      lowest = i;
    }
  }
  return arr.indexOf(lowest);
}

console.log(indexOfLowestValue([2, 4, 6, 7, 10, 0, -3]))

/* 4ª */
function biggestName(arr) {
  let word = arr[0];
  for(let i of arr) {
    if(i.length > word.length) {
      word = i;
    }
  }
  return word;
}

console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

/* 5ª */
function mostFrequent(arr) {
  let nTimes = 1;
  let result;
  for(let i of arr) {
    let frequency = 0;
    for(let j of arr){
      if(i === j) {
        frequency++;
      }
      if(frequency > nTimes) {
        nTimes = frequency;
        result = i;
      }
    }
  }
  return result;
}

console.log(mostFrequent([2, 3, 2, 5, 8, 2, 3]));

/* 6ª */
function sumOf1ToN(N) {
  let sum = 0;
  for(let i = 1; i <= N; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumOf1ToN(5));

/* 7ª */
function verifyEndingWord(strWord, strEnding) {
  // if(strWord.endsWith(strEnding)) {
  //   return true;
  // } else {
  //   return false;
  // }
  let length = strWord.length - strEnding.length;
  let newWord = "";
  for(let i = length; i < strWord.length; i++) {
    newWord += strWord[i];
  }
  if (newWord === strEnding){
    return true;
  } else {
    return false;
  }
}

console.log(verifyEndingWord('joaofernando', 'fernan'));