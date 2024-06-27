//When you call a function on nothing, (meaning that function is not coming from a class method or object methods), we call it on the “global object”.
//Say we created a custom method called greet() and that method or function is not part of some class/object, then it can be called like: greet() or even on the global object like if it’s on a browser then (window.greet()) or if it’s on some node js environment it’s global (where some node utilities are)like: (global.greet())

//When we call a function on nothing, but the function comes from inside a class, the value of “this” will be undefined , not the window.

class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }

  superGreet() {
    console.log(`#1: I am ${this.firstName}`); // works

    setTimeout(function () {
      console.log("THIS IS: ", this);
      console.log(`#2 I am ${this.firstName}`); // uh oh
    }, 500);

    setTimeout(() => {
      console.log("THIS IS: ", this);
      console.log(`#3 I am ${this.firstName}`); // yay!
    }, 1000);
  }

  greet() {
    console.log("this called from within a class method", this);
    return `Hello ${this.firstName}`;
  }
}

let kitty = new Cat("Kitty");
kitty.greet(); // would return the instance created from the class which in this case would be the "kitty" object

let func = kitty.greet();
console.log("func", func); //returns func Hello Kitty

let cat2 = new Cat("Cat2");
let someTest = cat2.greet;
console.log("someTest", someTest()); //returns this called from within a class method undefined, here the this object is undefined and it's trying to access firstName on an undefined object.
