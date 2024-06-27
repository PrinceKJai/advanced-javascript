//Buggy Code `this` Timers Exercise
//In the Timer class, modify the start method to log the tick property at one -
//second intervals correctly and add a stop method to clear the interval.

//The timer should stop after 5 ticks

class Timer {
  constructor() {
    this.tick = 0;
    this.timerId = null;
  }

  //buggy code
  //   start() {
  //     this.timerId = setInterval(
  //       function () {
  //         console.log(this.tick++);
  //       }.bind(this),
  //       1000
  //     );
  //   }

  //approach 1
  //   start() {
  //     this.timerId = setInterval(
  //       function () {
  //         console.log(this.tick++);
  //       }.bind(this),
  //       1000
  //     );
  //   }

  //approach 2
  start() {
    this.timerId = setInterval(
      function () {
        console.log(this.tick++);
      }.bind(this),
      1000
    );
    this.timerId.bind(this);
  }
}
