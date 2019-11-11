const fs = require('fs');
const path = require('path');
//creater folder
//fs.mkdir(path.join(__dirname, '/test'), {}, err => {
  //  if (err) throw err;
  //  console.log('File created....');
//creater and write to folder
//fs.writeFile(path.join(__dirname, '/test', 'Hello.txt'), 'Hello world! ', err => {
    //if (err) throw err;
    //console.log('File written to...');
    // create append file
    //fs.appendFile(path.join(__dirname, '/test', 'Hello.txt'), 'I love Node.js', err => {
        //if (err) throw err;
        //console.log('File written to...');
    //}
    //);
//}
//);
//read file
//fs.readFile(path.join(__dirname, '/test', 'Hello.txt'), 'utf8', (err, data) => {
  //if (err) throw err;
  //console.log(data);
//});
//rename file
fs.rename(path.join(__dirname, '/test', 'Hello.txt'), path.join(__dirname, '/test', 'Helloworld.txt'), err => {
    if (err) throw err;
    console.log('File renamed...');
});