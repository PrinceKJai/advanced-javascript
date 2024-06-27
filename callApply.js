//apply is used for binding the context of this
//the first argument is the context it needs, and the second argument expects an array of parameters
const ringo = {
  firstName: "Ringo",
  greet: function (greeting, punctuation) {
    console.log(`${this.firstName} says ${greeting}${punctuation}`);
  },
};

const george = {
  firstName: "George",
  lastName: "Harrison",
};

const nums = [1, 5, 2, 99, 3, 5];

function maximum() {
  console.log(arguments);
  //null is the context here as the first arguments
  //arguments is the second arg that is an array of arguments
  return Math.max.apply(null, arguments);
}

const r2 = ringo.greet.apply(ringo, ["hello", "!!!!"]);


//call is used for binding the context of this
//the first argument is the context it needs, and the second argument is the actual argument that the function need, in this case value for greeting, punctuation as comma separated values
const r1 = ringo.greet.call(ringo, "hello", "!!!!");


