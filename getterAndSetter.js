//Getters allows us to retrieve the value of object’s property. It is written like 
//a function with the get keyword and parenthesis but 
//behind the scenes it works like a property and can be retrieved like a property only.
class Circle {
  static allowedColors = new Set(["red", "green", "blue"]);

  constructor(radius, color) {
    this._radius = radius;
    this.setColor(color);
  }

  setColor(newColor) {
    if (Circle.allowedColors.has(newColor)) {
      this._color = newColor;
    } else {
      throw new Error("That color is not allowed");
    }
  }

  get radius() {
    return this._radius;
  }

  // Setter for the radius
  set radius(value) {
    if (value < 0) {
      throw new Error("Radius cannot be negative!");
    } else {
      this._radius = value;
    }
  }

  get color() {
    return this._color;
  }

  set color(newColor) {
    this.setColor(newColor);
  }
}

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.firstName = first;
    this.lastName = last;
  }
}


class TestUser {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `Hello ${this.firstName} ${this.lastName}`
    }

    set fullName(firstName) {
        const names = firstName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}
