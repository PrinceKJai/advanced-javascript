// ArrayUtils exercise
// Implement a class named ArrayUtils that cannot be instantiated and contains static methods average and max.
// If the class is instantiated throw an error with the message 'ArrayUtils cannot be instantiated.'

// The average method should return the average of an array of numbers. If the array is empty,
// throw an error with the message 'Array cannot be empty.'

// The max method should return the largest number from an array of numbers.
// You can assume you will always get passed an arrray of numbers

class ArrayUtils {
  static average(array) {
    if (array.length === 0) {
      throw new Error("Array cannot be empty");
    }
    const data = array.reduce((arr, val) => arr + val, 0);
    return data / array.length;
  }

  // static max(array) {
  //     return Math.max(...array);
  // }

  static max(array) {
    const maxval = array.reduce(
      (acc, val) => (val > acc ? val : acc),
      array[0]
    );
    return maxval;
  }
}

console.log(ArrayUtils.average([1, 2, 3, 4, 6, 7, 4, 9]));
console.log(ArrayUtils.max([1, 2, 3, 4, 6, 7, 4, 9]));
// console.log(ArrayUtils.average([]));
