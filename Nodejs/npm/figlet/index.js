/*NPM (Node Package Manager):
npm is the standard package manager for node.js.
npm install in a specfic dir and packege scope is where is install.

node_module: The node_modules folder contains every installed dependency for your project.
pcakage-lock.json : It records the the exact version of every installed dependency, including its sub-dependenices and their versions

packege.josn : The packege.json file contains decriptive and functional metadata about a project, such as a name version, and dependencies*/

const figlet = require("figlet");
figlet("Shahnawaz Akhtar", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });