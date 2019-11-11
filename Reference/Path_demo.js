const Path = require('path');

//Base file name

console.log(Path.basename(__filename));
// Directory name

console.log(Path.dirname(__filename));
//file name
console.log(Path.extname(__filename));
//create path object
console.log(Path.parse(__filename));
//concatnate paths
console.log(Path.join(__dirname, 'test', 'hello.html'));