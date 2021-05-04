const squareList = (arr) => {
  const integers = arr.filter(
    (number) => Number.isInteger(number) && number > 0
  );
  const square = integers.map((number) => number * number);
  return square;
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);
