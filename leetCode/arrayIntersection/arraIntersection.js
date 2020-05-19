var intersect = function(nums1, nums2) {
  if(nums1 > nums2) {
    let temp = nums1;
    nums1 = nums2;
    nums2 = temp;        
  }
  let notIntersected = new Map();
  nums1.forEach(el => {
    if(notIntersected.has(el)) {
      notIntersected.set(el, notIntersected.get(el) + 1)
    } else {
      notIntersected.set(el, 1)
    }
  })
  nums2.forEach(el => {
    if(notIntersected.has(el)) {
      if(notIntersected.has(el) > 1) {
        notIntersected.set(el, notIntersected.get(el) - 1)
      } else {
        notIntersected.delete(el)
      }
    }
  })
  return [...notIntersected.keys()]
}
