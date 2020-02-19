# Code Challenges

## Table of Contents
[Array-Reverse](../master/code-challenges/arraReverse/array-reverse.js)
[Array-Shift](../master/code-challenges/array-shift/array-shift.js)
[Array-Binary-Search](../master/code-challenges/arrayBinarySearch/array-binary-search.js)
[Linked-List](../master/code-challenges/linkedList/linked-list.test.js)

# Reverse an Array

## Challenge
Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

## Approach & Efficiency
I know that unshift is a good way of pushing elements to an array but from the front so i decided to run with that method. Alternatively i could have iterated through the input array from end to beginning and pushed the elements to an empty array. I think the method i chose is shorter but just as readable.

## Solution
![White-board](../master/assets/arrayreverse.jpg)

# Shift an Array

## Challenge Summary
Code challenge to insert a number into the middle of an array at index and shift the contained elements.

## Challenge Description
Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Approach & Efficiency
I decided first to create an empty array to add elements to as I believed it would be more difficult to modify the input array. I created an independan counter for the new array as they will have different lengths eventually. I then chose to iterate through the input array and insert each element into the new array with each iteration. Once the iteration reached halfway through the input array rounding up minus 1 I set the new arrays value to equal the input value then continued with the loop. I returned the new array.

## Solution
![White-board-1](../master/assets/array-shift1.jpg)
![White-board-2](../master/assets/array-shift2.jpg)

# Binary Search

## Challenge Summary
Code challenge to return index of sorted array element equal to input value.

## Challenge Description
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Approach & Efficiency
I decided first to create an empty array to add elements to as I believed it would be more difficult to modify the input array. I created an independan counter for the new array as they will have different lengths eventually. I then chose to iterate through the input array and insert each element into the new array with each iteration. Once the iteration reached halfway through the input array rounding up minus 1 I set the new arrays value to equal the input value then continued with the loop. I returned the new array.

## Solution
![White-board-1](../master/assets/arrayBinarySearch.jpg)

# Singly Linked List
Create a singly linked list that inserts, finds, and returns nodes.

## Challenge
Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
Define a method called toString (or __str__ in Python) which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"
Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.
Be sure to follow your language/frameworks standard naming conventions (e.g. C# uses PascalCasing for all method and class names).

## Approach & Efficiency
I approached this challenge by following along loosely with the demo at first and then going off on my own to demonstrate my understanding. I ran the methods I created with console logs in a node environment so that i could visualize the construction of each node and the traversing. with the last method I decided to start creating tests so that i could test the toString() method directly and now I have a much better understanding of how to contruct and use tests.

# 2 Insertions
Create an append, insert before, and insert after method on a linked list

## Challenge Description
Write the following methods for the Linked List class:
- .append(value) which adds a new node with the given value to the end of the list
- .insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node
- .insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node

## Approach & Efficiency
For this challenge i decided to write all the test first so that as i developed my methods the tests would prove that they were working. My approaches were efficent because you would only traverse once through the linked lists and only so far as was needed.

## Solution
![2-Insertions](../master/assets/2insertions.jpg);