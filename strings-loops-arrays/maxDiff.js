const numbers = [2, 3, 10, 6, 4, 8, 1];

const findMaxDiff = function(numbers) {

  let min = numbers[1];
  let difference = -1;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    } else if (numbers[i] - min > difference) {
      difference = numbers[i] - min;
    }
  }

  return difference;
}

console.log(findMaxDiff(numbers));