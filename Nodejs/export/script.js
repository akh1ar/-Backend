/*Node.js
JavaScript Runtime Enviroment
it is used for server side programming.
Node.js is not a language,library or framework*/


/*Process
process: This object provides information about, and control  over, the current Node.js process.
process.args: returns an array containing the command-line arguments passed when the node.js process was launched.*/

let args = process.argv;
for(let i=2;i<args.length;i++){
    console.log("hello & welcome to: ",args[i]);
}

/*##module.exports
#requiring files
require() a built-in funtion to include external modules that exist in separate files.

module.exports a special Object*/

const someV = require("./math");
console.log(someV.sum(2,2));
console.log(someV.avg(2,2));


/*#requiring directories*/
const info = require("./Fruits");
console.log(info[0]);