class Triangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }

  describe() {
    return `Area is ${this.getArea()}.`;
  }
}

class ColorTriangle extends Triangle {
  constructor(a, b, color) {
    //If we want to call the constructor method of the parent class in an inherited
    //class (using the extends keyword), we need to use super keyword inside the derived/inherited class.
    //We have to always call the super keyword in a derived class whenever we want to instantiate a 
    //constructor and pass additional properties apart from the base class ctor.
    super(a, b);
    this.color = color;
  }

  getColor() {
    return `Color is: ${this.color}`
  }
}

class ColorMoodTriangle extends ColorTriangle {
  constructor(a, b, color, mood) {
    super(a, b, color);
    this.mood = mood;
  }
}
