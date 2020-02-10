'use strict';

let reverseArray = arr => {
  const newArr = [];
  arr.forEach(element => {
    newArr.unshift(element);
  })
  return newArr;
}