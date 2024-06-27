// Modern Js offers Static Properties where individual piece of data is on the class and not on the instances. Other OOP call this idea  a “class attributes”
// Static Properties can be directly accessed on the class itself like: if Cat is a class and “species” is a Static Properties on the Cat class then we can access it via Cat.species and not like 
// Const cat1 = new Cat();
// cat1.species; //this will return undefined  for Static Properties

class Cat {
    constructor(name, breed) {
      this.name = name;
      this.breed = breed;
    }
  
    static meow() {
      console.log("THIS IS: ", this);
    }
  
    static species = "felis catus";
  }

  const cat1 = new Cat("lovely", "breed");
  cat1.species; //will return undefined