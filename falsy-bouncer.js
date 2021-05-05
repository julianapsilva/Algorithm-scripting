function bouncer(arr) {
  arr = arr.map((value) => {
    if (Boolean(value)) return value;
  });
  arr = arr.filter((value) => value);

  return arr;
}

bouncer([7, "ate", "", false, 9]);
