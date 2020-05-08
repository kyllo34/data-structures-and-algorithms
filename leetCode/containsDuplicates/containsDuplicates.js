var containsDuplicate = function(nums) {
  let addedNums = new Set();
  for (let el of nums) {
      if (addedNums.has(el)) return true;
      else addedNums.add(el)
  }
  return false;
};