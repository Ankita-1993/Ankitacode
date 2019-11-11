const url = require('url');
const myurl = new URL('http://mywebsite.com:800/hello.html?id=100&atatus=active');
//Serialized URL
console.log(myurl.href);
console.log(myurl.toString());
//host (root name)
console.log(myurl.host);
//host name(does not get port)
console.log(myurl.hostname);
//pathname
console.log(myurl.pathname);
//serialized query
console.log(myurl.search);
//params objects
console.log(myurl.searchParams);
//add params
myurl.searchParams.append('abc', 123)
console.log(myurl.searchParams);