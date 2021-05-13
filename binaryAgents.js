function binToDec(bin) {
  let aux = bin.split("");
  let sum = 0,
    j = 0;
  for (let i = aux.length - 1; i > 0; i--) {
    sum += Number(aux[i]) * Math.pow(2, j++);
  }
  return sum;
}

function binaryAgent(str) {
  let letters = str.split(" ");
  let sentence = "";
  for (let i = 0; i < letters.length; i++) {
    sentence += String.fromCharCode(binToDec(letters[i]));
  }
  return sentence;
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
