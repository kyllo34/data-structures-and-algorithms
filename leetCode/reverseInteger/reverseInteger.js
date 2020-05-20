var reverse = function(x) {
  let num = Math.abs(x)
  let rev = 0;
  while (num >= 1) {
      let pop = num % 10;
      num = Math.floor(num / 10);
      rev = rev * 10 + pop
  }
  if (rev > 0x7FFFFFFF) return 0;
  return x > 0 ? rev : rev * -1
};
