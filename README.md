# Code Challenges

## Table of Contents
- [Array-Reverse](#reverse-an-array)</br>
- [Array-Shift](#shift-an-array)</br>
- [Array-Binary-Search](#binary-search)</br>
- [Linked-List](#singly-linked-list)</br>
- [Queue-With-Stacks](#queue-with-stacks)</br>
- [Stacks-And-Queues](#stacks-and-queues)</br>
- [Fifo-Animal-Shelter](#fifo-animal-shelter)</br>
- [Trees](#trees)</br>
- [Fizz-Buzz-Tree](#fizz-buzz-tree)</br>
- [Breadth-First-Traversal](#breadth-first-traversal)</br>
- [Max-Value](#max-value)</br>
- [Insertion-Sort](#insertion-sort)</br>



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

# Trees
Create a binay tree that has depth traversals called preOrder, InOrder, and postOrder which returns an array of the values ordered appropriately.

## Challenge
Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
Create a BinaryTree class
Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.
Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.

## Approach & Efficiency
I chose to instantiate my BinaryTree class with a storage property to push the values to and return at the end of the traversal. It seemed like the best way to traverse the nodes was recursively as with each traversal you can essentially treat the current node as the new root while saving the previous node in the callstack. This allowed for the code to be fairly dry and allowed the Big O for time to be O(n) as each node is only hit once and the Big O for space complexity to be O(1).

## API
`preOrder()` - When invoked accepts a node as an argument. It will first check to make sure that the argument is a node and will return a message if it isn't. It will then push the input nodes value to the BinaryTree storage. It will then check to see if there is a left node and will call the preOrder function again but with the next node as the argument. These invocations will be pushed onto the callstack. Once it traverses to the point where there is no left node next it will begin to check all the right nodes recursively by popping off the callstack. It will then return the storage array
`inOrder()` - Similar to the preOrder() method we first validate the input to be a node and perform the same traversal via recursion but will push the values to the array after we run past the second condition and then we return the storage array.
`postOrder()` - This method is similar to the previous two but push the node values to the storage when both the left and right nodes of the parent node have been evaluated.

## Solution
[code](../master/code-challenges/tree/tree.js)</br>
[test](../master/code-challenges/tree/tree.test.js)

# Fizz Buzz Tree
Write a function called FizzBuzzTree that accepts a tree and creates a new similar tree with numbers divisible by 3 replaced with 'Fizz', numbers divisible by 5 with 'Buzz', numbers divisible by 3 and 5 with 'FizzBuzz', and turn the number into a string otherwise.
## Challenge Description
Write a function called FizzBuzzTree which takes a tree as an argument.
Without utilizing any of the built-in methods available to your language, determine whether or not the value of each node is divisible by 3, 5 or both. Create a new tree with the same structure as the original, but the values modified as follows:
If the value is divisible by 3, replace the value with “Fizz”
If the value is divisible by 5, replace the value with “Buzz”
If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
If the value is not divisible by 3 or 5, simply turn the number into a String.
Return the new tree.
## Approach & Efficiency
I decided to approach this problem by traversing depth first in the style of an inOrder method as I will need to hit every node once to read its value. I created a new node in the traversal to make the coding easier. I created a separate function to perform the comparison which is called at the beginning of the traversal. 

## Solution
[code](../master/code-challenges/fizzBuzzTree/fizz-buzz-tree.js)</br>
[test](../master/code-challenges/fizzBuzzTree/fizz-buzz-tree.test.js)</br>
![Fizz-Buzz-Tree](../master/assets/fizz-buzz-tree.jpg)</br>

# Breadth First Traversal
Write a breadth-first traversal method that takes in a binary tree as input and returns a list of values in the tree in the order that they were encountered.
## Challenge Description
Write a breadth first traversal method which takes a Binary Tree as its unique input. Without utilizing any of the built-in methods available to your language, traverse the input tree using a Breadth-first approach, and return a list of the values in the tree in the order they were encountered.
## Approach & Efficiency
For the breadth-first traversal i used a queue data structure. As we traverse we push the right and left nodes to the queue and push the current node's value to the array. With each traversal we remove the next node from the queue and push its value and so on.

## Solution
[code](../master/code-challenges/breadthFirst/breadth-first.js)</br>
[test](../master/code-challenges/breadthFirst/breadth-first.test.js)</br>
![Fizz-Buzz-Tree](../master/assets/breadthfirst.jpg)</br>

# Max Value
Write an instance method called find-maximum-value which returns the maximum value stored in a Binary Tree.

## Challenge Description
Write an instance method called find-maximum-value. Without utilizing any of the built-in methods available to your language, return the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.

## Approach & Efficiency
I chose to use a depth search traversal to hit every node. I instantiated a max vairable with -Infinity that gets compared to each node value upon traversal and set equal to the value if the value is greater. At the end I returned the max value.

## Solution
[code](../master/code-challenges/breadthFirst/breadth-first.js)</br>
[test](../master/code-challenges/breadthFirst/breadth-first.test.js)</br>

# Insertion Sort
Write a function that takes in an array of integers and sorts them from smallest to largest

## Challenge Description
Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

Once you are done with your article, code a working, tested implementation of Insertion Sort based on the pseudocode provided.
```
InsertionSort(int[] arr)

  FOR i = 1 to arr.length
  
    int j <-- i - 1
    int temp <-- arr[i]
    
    WHILE j >= 0 AND temp < arr[j]
      arr[j + 1] <-- arr[j]
      j <-- j - 1
      
    arr[j + 1] <-- temp
```

## Approach & Efficiency
What this function does on fundemental level is iterate through the array and compare 2 adjacent values and when the next value is less you shift it to the right and insert the held value at the point where it is no longer less than the next element in the array.

## Solution
[code](../master/code-challenges/insert-sort/inserSort.js)</br>
[test](../master/code-challenges/insert-sort/insertSort.test.js)</br>
![insert-sort](../master/assets/insert-sort.jpg)</br>
