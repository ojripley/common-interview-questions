const fizzBuzz = function(n) {

  let fizzy = '';

  for (let i = 0; i <= n; i++) {

    fizzy = '';

    if (i % 3 === 0) {
      fizzy = 'Fizz';
    }

    if (i % 5 === 0) {
      fizzy += 'Buzz';
    }

    if (fizzy.length === 0) {
      console.log(i);
    } else {
      console.log(fizzy);
    }
  }
}

fizzBuzz(100);