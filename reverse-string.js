function reverseString(str) {
  let aux = [];
  for (let i = 0; i < str.length; i++) {
    aux.push(str[i]);
  }
  aux.reverse();
  return aux.join("");
}

reverseString("hello");
