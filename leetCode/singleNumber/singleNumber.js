var singleNumber = function(nums) {
  let numsSet = new Set();
  for (let el of nums) {
      if (!numsSet.delete(el)) numsSet.add(el)
  }
  return [...numsSet][0]
};

var singleNumber = function(nums) {
  let sum = 0;
  for (let el of nums) {
      sum = sum ^ el
  }
  return sum
};