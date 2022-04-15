const fs = require('fs').promises;

const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

Promise.all(array.map((string, index) => fs.writeFile(`file${index + 1}.txt`, string)))

Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt'),
  fs.readFile('file4.txt'),
  fs.readFile('file5.txt'),
])
  .then(([file1, file2, file3, file4, file5]) => fs.writeFile('fileAll.txt', 
    `${file1} ${file2} ${file3} ${file4} ${file5}`))
