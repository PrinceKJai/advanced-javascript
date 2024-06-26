class Triangle {
  constructor(a, b) {
    //the this keyword inside the constructor refers to the object instantiated 
    //from this Triangle class and not the class itself
    this.a = a;
    this.b = b;
  }
  getArea() {
    // whereas this keyword inside the method or even the properties refers to the class itself
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }

  sayHi() {
    return "HELLO FROM A TRIANGLE!!";
  }
}
