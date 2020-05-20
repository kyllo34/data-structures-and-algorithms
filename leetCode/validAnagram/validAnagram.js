var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  let occurence = {};
  for (let i of s) {
      if(occurence[i] === undefined) {
          occurence[i] = 1
      } else {
          occurence[i]++
      }      
  }
  for (let i of t) {
      if(!occurence[i] || occurence[i] < 0) {
          return false
      } else {
          occurence[i]--
      }
  }
  return true
};