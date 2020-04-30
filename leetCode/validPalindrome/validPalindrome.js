const validPalindrome = str => {
  if (str === '') return true;
  let i = 0;
  let j = str.length - 1;
  while (i <= j) {
    if (!/\w/.test(str[i]) && !/\w/.test(str[j])) {
      if (str[i].toLowerCase() !== str[j].toLowerCase()) return false;
    } else {
      i++;
      j--;
    }
    if (/\w/.test(str[i])) i++;
    if (/\w/.test(str[j])) j--;
  }
  return true
}