// JS gives us Static methods, where the method is called on the class and not on the instance, therefore it cannot have access to individual object attributes
// The “this” keyword inside the Static methods refers to the Class itself and not the instance like “this” would be when called inside the constructor or the normal methods or properties.

class Cat {
  constructor(name, breed) {
    //inside this refers to the instance of the Cat class
    console.log("inside ctor", this);
    this.name = name;
    this.breed = breed;
  }

  static registerStray() {
    const names = [
      "Muffin",
      "Biscuit",
      "Sleepy",
      "Dodo",
      "Princess Butterface",
    ];
    //refers to the whole class
    console.log("inside static method", this);
    const name = choice(names);
    return new Cat(name, "unknown");
  }
  meow() {
    //inside this refers to the instance of the Cat class
    console.log("inside class methods", this);
    return `${this.name} says meow`;
  }
}

function choice(arr) {
  const randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx];
}
