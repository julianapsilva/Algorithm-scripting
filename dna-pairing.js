function pairElement(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let pair = [];

    switch (str[i]) {
      case "G":
        pair.push("G", "C");
        break;

      case "C":
        pair.push("C", "G");
        break;

      case "A":
        pair.push("A", "T");
        break;

      case "T":
        pair.push("T", "A");
        break;
    }
    arr.push(pair);
    pair = [];
  }

  return arr;
}

pairElement("GCG");
