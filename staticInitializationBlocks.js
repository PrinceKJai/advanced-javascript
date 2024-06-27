//static initialization block loads just once when the class loads. it does not load on instance creation
//of the class. The "this" keyword inside th static block refers to the class itself and not the instance
// just like a static properties or method does.

class DatabaseConnection {
    static connection;
    static {
        console.log("this", this);
      if (process.env.NODE_ENV === "production") {
        this.connection = this.loadProductionConnection();
      } else {
        this.connection = this.loadDevelopmentConnection();
      }
    }
  
    static loadProductionConnection() {}
    static loadDevelopmentConnection() {}
  }
  