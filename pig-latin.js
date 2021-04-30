const isVowel = (letter) => {
  return (
    letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u");
};

function translatePigLatin(str) {
  if (isVowel(str[0])) {
    return (str += "way");
  } else {
    let aux = "";
    let i = 0;
    while (!isVowel(str[i]) && i < str.length) {
      i++;
    }
    for (let j = i; j < str.length; j++) {
      aux += str[j];
    }

    for (let j = 0; j < i; j++) aux += str[j];

    return (aux += "ay");
  }
}

console.log(translatePigLatin("rhythm"));
