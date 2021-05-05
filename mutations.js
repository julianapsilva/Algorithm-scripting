function mutation(arr) {
  let letters = arr[1].split("");
  let regex = "";
  let present = true;

  for (let i = 0; i < arr[0].length; i++) {
    regex = new RegExp(letters[i], "gi");
    if (!regex.test(arr[0])) present = false;
  }
  return present;
}

mutation(["hello", "hey"]);
