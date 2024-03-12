function indexOfIgnoreCase(s1, s2) {
  if (typeof s1 !== 'string' || typeof s2 !== 'string') {
    return -1; // return -1 if any of the inputs is not a string
  }

  const strLower = s1.toLowerCase();
  const subStrLower = s2.toLowerCase();

  for (let i = 0; i <= s1.length - s2.length; i++) {
    if (strLower.substr(i, s2.length) === subStrLower) {
      return i;
    }
  }

  return -1; // return -1 if subStr is not found in str
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
