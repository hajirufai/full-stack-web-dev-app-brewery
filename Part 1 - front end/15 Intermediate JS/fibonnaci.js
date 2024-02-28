function fibonacciGenerator(n) {
  // Do NOT change any of the code above 👆

  // Write your code here:
  var arr = [0, 1];

  if (n === 1) {

    return [0];

  } else if (n === 2) {

    return [0, 1];

  } else {

    for (var i = 3; i <= n; i++) {
        
      let sum_of_last_two_elements = arr[arr.length - 1] + arr[arr.length - 2];
      arr.push(sum_of_last_two_elements);

      if (i === n) {
        return arr;
      }
    }
  }

  // Return an array of fibonacci numbers starting from 0.

  // Do NOT change any of the code below 👇
}
