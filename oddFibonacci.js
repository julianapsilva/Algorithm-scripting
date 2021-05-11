function fib(n) {
  const result = [1, 1];
  for (var i = 2; i < n; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }
  return result;
}

function sumFibs(num) {
  let sequence = fib(num);

  sequence = sequence.reduce((acc, value) =>
    value % 2 == 1 && value <= num ? acc + value : acc
  );
  return sequence;
}

sumFibs(75025);
