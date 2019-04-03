/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding - This is the default binding where the 'this' keyword will bind to window/console object
* 2. Implicit binding is where a method is called through an object with the '.' notation. In this case "this" is bound to the calling object
* 3. Explicit binding is where you specifically bind 'this' to an object with the use of 'call' or 'apply' method
* 4. New binding is a binding that occurs when constructing a new object.'this' will refer to the new instance of the object that is created.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this); //binds to window

// Principle 2

// code example for Implicit Binding

 let aCar = {
     brand: 'Ford',
     year: 1998,
     describe: function() { return `This car is a ${this.year} ${this.brand}`}
}

console.log(aCar.describe()); //Implicit binding


// Principle 3

// code example for New Binding
function Car(obj) {
    this.brand = obj.brand,
    this.year = obj.year,
    this.describe = function() { console.log(`This car is a ${this.year} ${this.brand}`)  }
}

myNewCar = new Car({year:1999,brand:'toyota'}); //Will bind 'this' to new instance of object'
myNewCar.describe(); 

// Principle 4

// code example for Explicit Binding

//Adding to the code in Principle 3
mySecondCar = new Car({year:1980, brand:'Mercedes'});
mySecondCar.describe.call(myNewCar); //Explicitly binds 'this' to the myNewCar object.