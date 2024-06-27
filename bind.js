const conan = {
  name: "Conan",
  city: "Los Angeles",
  sing: function () {
    console.log("THIS is: ", this);
    console.log(`${this.name} sings LA LA LA`);
  },
};

const btn = document.querySelector("#clickMe");
// btn.addEventListener('click', conan.sing()); //this will always trigger the click event on page load and not on the click of the button, as we are calling the function direclty here
// btn.addEventListener("click", conan.sing); //here "this" refers to the button element and hence sing method is not on button object
btn.addEventListener("click", conan.sing.bind(conan)); //this will return the expected behavior and the event will trigger only on the click of button,as the bind function binds the context of this to the conan object


function multiply(a, b) {
    console.log("this", this);
    return a*b;
}

const m1 = multiply.bind(this, 2); //here we are binding the multiply function with the global window context for "this" and passing 2 as the first parameter for the function
console.log("result m1", m1(3));

const m2 = multiply.bind(this, 2, 4); //here we are binding the multiply function with the global window context for "this" and passing 2 as the first parameter and 4 as the first parameter for the function. so the result will always be 8, as the arguments are always predefined now
console.log("result m2", m2(3)); // result is 8 no matter if we pass any values