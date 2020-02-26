# Code Challenges

## Table of Contents
- [Array-Reverse](#reverse-an-array)</br>
- [Array-Shift](#shift-an-array)</br>
- [Array-Binary-Search](#binary-search)</br>
- [Linked-List](#singly-linked-list)</br>
- [Queue-With-Stacks](#queue-with-stacks)</br>
- [Stacks-And-Queues](#stacks-and-queues)</br>
- [Fifo-Animal-Shelter](#fifo-animal-shelter)</br>


# Reverse an Array

## Challenge
Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

## Approach & Efficiency
I know that unshift is a good way of pushing elements to an array but from the front so i decided to run with that method. Alternatively i could have iterated through the input array from end to beginning and pushed the elements to an empty array. I think the method i chose is shorter but just as readable.

## Solution
![White-board](../master/assets/arrayreverse.jpg)</br>
[Code](../master/code-challenges/arraReverse/array-reverse.js)

# Shift an Array

## Challenge Summary
Code challenge to insert a number into the middle of an array at index and shift the contained elements.

## Challenge Description
Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Approach & Efficiency
I decided first to create an empty array to add elements to as I believed it would be more difficult to modify the input array. I created an independan counter for the new array as they will have different lengths eventually. I then chose to iterate through the input array and insert each element into the new array with each iteration. Once the iteration reached halfway through the input array rounding up minus 1 I set the new arrays value to equal the input value then continued with the loop. I returned the new array.

## Solution
![White-board-1](../master/assets/array-shift1.jpg)</br>
![White-board-2](../master/assets/array-shift2.jpg)</br>
[code](../master/code-challenges/array-shift/array-shift.js)

# Binary Search

## Challenge Summary
Code challenge to return index of sorted array element equal to input value.

## Challenge Description
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Approach & Efficiency
I decided first to create an empty array to add elements to as I believed it would be more difficult to modify the input array. I created an independan counter for the new array as they will have different lengths eventually. I then chose to iterate through the input array and insert each element into the new array with each iteration. Once the iteration reached halfway through the input array rounding up minus 1 I set the new arrays value to equal the input value then continued with the loop. I returned the new array.

## Solution
![White-board-1](../master/assets/arrayBinarySearch.jpg)
[code](../master/code-challenges/arrayBinarySearch/array-binary-search.js)

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

[code](../master/code-challenges/linkedList/linked-list.test.js)

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
![2-Insertions](../master/assets/2insertions.jpg)</br>
[code](../master/code-challenges/linkedList/linked-list.test.js)


# 2 Insertions
Write a method for the linked list which take a number k and returns the nodes value that is k from the end of the list.

## Challenge Description
Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Approach & Efficiency
For this challenge i decided to write all the test first so that as i developed my methods the tests would prove that they were working. My approach was to traverse through the whole linked list and unshift each node value to an array and then return the kth index in that array. It is very efficient in terms of time and space.

## Solution
![kth-From-End](../master/assets/kthfromend.jpg)</br>
[code](../master/code-challenges/linkedList/linked-list.test.js)

# Linked Lists merge
Write a function that zips together two linked lists by alternating nodes and return the head of the new list.

## Challenge Description
Write a function called mergeLists which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keep additional space down to O(1). You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Approach & Efficiency
For this challenge I drew out everything before starting i drew out a diagram of two linked lists and how i would merge them. I found that the best way to accomplish this task was to traverse both lists simultaneously and change the paths dynamically. 

## Solution
![kth-From-End](../master/assets/merge.jpg);
[code](../master/code-challenges/linkedList/linked-list.test.js)

# Queue With Stacks
Write a PseudoQueue class that uses method enqueue(value) to insert a value in the PseudoQue and method dequeue which extracts a value from the PseudoQueue. Use two stack objects to accomplish this.

## Challenge Description
Create a brand new PseudoQueue class. Do not use an existing Queue. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below), but will internally only utilize 2 Stack objects. Ensure that you create your class with the following methods:

enqueue(value) which inserts value into the PseudoQueue, using a first-in, first-out approach.
dequeue() which extracts a value from the PseudoQueue, using a first-in, first-out approach.
The Stack instances have only push, pop, and peek methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor.

## Approach & Efficiency
For this challenge i first created the tests for the stack methods. I then modified the code and tests as i progressed. For the PseudoQueue methods i recognized that only the stacks can be operated on so if i wanted to add something to the bottom of the stack i would have to push all the values to another stack and the push the new value to the top of the new stack. For the enqueue method i recognized that you had to push all the values to a new stack again but then pop off the top value in the new stack.

## Solution
![Queue-With-Stacks](../master/assets/queue_with_stacks.jpg) </br>
[Code](../master/code-challenges/queueWithStacks/queue-with-stacks.js)

# Stacks and Queues
Create a Stack and Queue class that can add, remove, read, and delete nodes from.

## Challenge Description
Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
Create a Stack class that has a top property. It creates an empty Stack when instantiated.
This object should be aware of a default empty value assigned to top when the stack is created.
Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
Define a method called isEmpty that does not take an argument, and returns a boolean indicating whether or not the stack is empty.
Create a Queue class that has a front property. It creates an empty Queue when instantiated.
This object should be aware of a default empty value assigned to front when the queue is created.
Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
Define a method called isEmpty that does not take an argument, and returns a boolean indicating whether or not the queue is empty.

## Approach & Efficiency
I started with creating a node class that accepts a value into its contructor and starts with a next property set to null. I created a stack class that instantiates with a null top property. I created a push method that accepts a value as an argument. First the method creates a place holder for the top node and then sets the stack top to be a new node with the argument. I then set the node after the top to be the original top so that it behaves as an insertion. I created a pop method that tests to see if the top is null. if it isnt it sets the top to be the tops next node which removes the original top. I created an isEmpty method which returns true if the top is null and false otherwise. I creaked a peek method that simply returns the top nodes value

I wrote a Queue class that has a front property set to null which creates an empty queue on instantiation. For the enqueue method I first instantiate a new node with the given value and first test to see if the front is null. If it is then the front is set to the newly created node. If not we traverse the queue using a while loop until we get to the point where there is no next node. I then assigned the new node to be the next node. For the peak method I tested if the front is null. If it is then I returned null, otherwised i returned the front's value. For the dequeue method created a placeholder for the front and then set the front to the next node in the queue. I then returned the placeholder. 

## Solution
[Unit-Tests](../master/code-challenges/stacksAndQueues/stacks-and-queues.test.js) </br>
[Code](./master/code-challenges/stacksAndQueues/stacks-and-queues.js)


## Solution
![2-Insertions](../master/assets/2insertions.jpg)</br>
[code](../master/code-challenges/linkedList/linked-list.test.js)

# Fifo Animal Shelter
Create a class called AnimalShelter which holds dogs and cats and operates using first-in and first-out. Engueue(animal) adds an animal to the shelter and dequeue(pref) returns either a dog or cat. if pre is not a dog or cat, return null.

## Challenge Description
Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
Implement the following methods:
enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.

## Approach & Efficiency
For this challenge i first created an AnimalShelter class that instantiates with an empty array in its storage property. 
For the enqueue method i tested to see if the input object is a dog or a cat and if it is then you push the object into the storage array. If it is not a dog or a cat i returned null.
For the dequeue method i check to see if the input is a cat or a dog. If it is then i loop through the storage array until it ecounters the same animal, we splice it so that it removes it from the storage and return the removed element. If the input is not a cat or a dog i returned null.

## Solution
![kth-From-End](../master/assets/fifoanimalshelter.jpg)</br>
[code](../master/code-challenges/fifoAnimalShelter/fifo-animal-shelter.js)</br>
[test](../master/code-challenges/fifoAnimalShelter/fifo-animal-shelter.test.js)
