const fs = require('fs');
// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ankita',
//     age: 26
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json-json', bookJSON)
// const dataBuffer = fs.readFileSync('1-json-json');
// console.log(dataBuffer.toString())

const dataBuffer = fs.readFileSync('1-json-json');
const data = dataBuffer.toString()
const user = JSON.parse(data);

user.author = 'abhay',
user.age = 32
const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json-json', userJSON)