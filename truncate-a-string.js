function truncateString(str, num) {
  let newStr = "";
  if (str.length > num) {
    for (let i = 0; i < num; i++) newStr += str[i];

    newStr += "...";
    return newStr;
  }

  return str;
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);
