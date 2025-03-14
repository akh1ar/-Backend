/*Object PRototypes
Prototypes are the mechanism by which JavaScript objects inherit features from one another.
It is likes a single template objects that all objects inherit methonds and propertites from without having thier own copy*/
let arr = [1, 2, 3, 4, 5, 6];
let arr1 = [1, 2, 3, 4, 5, 6];
arr.hello = () => {
  console.log("hELLLO ARR 1");
};
arr1.hello = () => {
  console.log("hELLLO ARR 1");
};

/*Factory Functions
A function that creates objects*/

function personMakaer(name, age) {
  const person = {
    name: name,
    age: age,
    talk() {
      console.log(`hi my name is ${this.name}`);
    },
  };
  return person;
}
let p1 = personMakaer("Shahnawaz", 21); //copy
let p2 = personMakaer("Shahil", 22);
p1.talk();
p2.talk();
/*Disadvantages create a obj using factory funtion  every obj create own copy like talk is common for all it copy will make , this is an iffecient of the memory*/
/*Veryfiy Here */
console.log(p1.talk === p2.talk);

//Constructors - dosen't return anything & start with captial
function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this);
}
Person.prototype.talk = function () {
  console.log(`hi my name is ${this.name}`);
};
/*New Operator - The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types has a constructor function.*/
let p3 = new Person("Shahnawaz", 21);
let p4 = new Person("Shahil", 22);
//p3 and p4 are both lie in  same prototype.
console.log(p3.talk === p4.talk);

/*Classes - Classes are a template for creating objects
The constructor method is a special method of a class for creating and initializing an object inctance of that class. */

class Persons {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hii, my name id ${this.name}`);
  }
}

let p5 = new Persons("irfan", 24);
let p6 = new Persons("irfan1", 25);

/*Inheritance - is a machanism that allow us to create new classes on the basis of already existing classes. */

class Mammal {// base class / parent
  constructor(name) {
    this.name = name;
    this.type = "Warm-blooded";
  }
  eat() {
    console.log("I'am Eating");
  }
}

class Dog extends Mammal {//child class
  constructor(name) {
    super(name); //parent class constructor is being called
  }
  bark() {
    console.log("wooff...");
  }
}

class Cat extends Mammal {
  //child class
  constructor(name) {
    super(name);
  }
  mewo() {
    console.log("mewo...");
  }
}
let dog1 = new Dog("Saru");