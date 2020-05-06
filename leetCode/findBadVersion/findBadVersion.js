var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let lowerBound = 1;
    let upperBound = n;
    while (upperBound !== lowerBound) {
      let mean = Math.floor((upperBound + lowerBound)/2)
      if (!isBadVersion(mean)) {
        lowerBound = mean + 1;
      } else {
        upperBound = mean;
      }
    }
    return upperBound;
  };
};