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
- [Merge-Sort](#merge-sort)</br>
- [Repeated-Word](#repeated-word)</br>
- [Hashmap-LEFT- JOIN](#hashmap-left-join)</br>
- [Graphs](#graphs)</br>
- [Breadth-First-Graph](#breadth-first-graph)</br>
- [Get-Edge](#get-edge)</br>




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
What this function does on fundemental level is iterate through the array and compare 2 adjacent values and when the next value is less you shift it to the right and insert the held value at the point where it is no longer less than the next element in the array. The space complexity for this is O(1) as we only use a variable to hold the integer to be compared. The time complexity at worse is O(n^2) as if the array is reverse-sorted then each element will be iterated over the array's length minus its index's times.

## Solution
[code/test](../master/code-challenges/insert-sort/insertSort.test.js)</br>
![insert-sort](../master/assets/insert-sort.jpg)</br>

# Merge Sort
Merge sort a function that splits an array into its individual elements for comparison and then merges the subsequent sorted arrays until the original array is sorted

## Challenge Description
Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

Once you are done with your article, code a working, tested implementation of Merge Sort based on the pseudocode provided.

Pseudo Code
```
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

Sample Arrays
In your blog article, visually show the output of processing this input array:

`[8,4,23,42,16,15]`

For your own understanding, consider also stepping through these inputs:

Reverse-sorted: `[20,18,12,8,5,-2]`
Few uniques: `[5,12,7,5,5,7]`
Nearly-sorted: `[2,3,5,7,13,11]`
Implementation
Provide a visual step through for each of the sample arrays based on the provided pseudo code
Convert the pseudo-code into working code in your language
Present a complete set of working tests

## Approach & Efficiency
The space complexity of this method of sorting is O(n) as we create a new left and right array that is half the size of the input array
The time complexity of this method is less than O(n) as it essentially creates a binary tree and performs a preOrder traversal. 

## Solution
[code/test](../master/code-challenges/merge-sort/mergeSort.test.js)</br>
![insert-sort](../master/assets/merge-sort.jpg)</br>

# Repeated Word
Write a function that returns the first word that occurs more than once in the input string

## Challenge Description
Write a function that accepts a lengthy string parameter.
Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.

## Approach & Efficiency
For this challenge i recognized that I would need to turn the input string into an array of words and make the individual words be lowercase and ommit punctuation for comparison. I decided to create a hash map that stores each word as a key and the index as its value even though we only care about the key. To know what words are in the array we would have to iterate through it and store the words in the hashmap. With each iteration we check to see if the current element exists in the map. If it does we return the element and stop the loop. Otherwise, we add the element to the map. The Big O for time is however long it takes to iterate through the array and hit the first word that occurs more than once which would be O(n) at worst if the word is at the end of the string. The space complexity is O(2n) => O(n) as we are creating an array and a hashmap to store the words of the string.
## Solution
[code/test](../master/code-challenges/repeatedWord/repeated-word.test.js)</br>
![insert-sort](../master/assets/repeated-word.jpg)</br>

# Tree Intersection
write a function that accepts 2 trees and returns an array of values found in both trees
## Challenge Description
Write a function called tree_intersection that takes two binary tree parameters.
Without utilizing any of the built-in library methods available to your language, return a set of values found in both trees.
## Approach & Efficiency
What i started with is a depth 1st traversal for both trees as we will need to read every single value in both trees to compare. I employed a hashmap to add the values to and compare as keys to ensure that each value was unique. Traversing the second tree adds keys to a new hashmap if the value doesnt exist in the first hashmap. I then returned the array spread of the maps keys.

The time complexity is O(n) as we traverse through both tress but comparing and adding values to hashmaps is O(1) which can be dsregarded. The space complexity is at worst O(n/2) because the first hashmap could contain all of the 1st tree and not match with any values in the 2nd tree.

## Solution
[code/test](../master/code-challenges/treeIntersection/tree-intersection.test.js)</br>
![tree-intersection](../master/assets/tree-intersection.jpg)</br>

# Hashmap LEFT JOIN
Write a function that joins the values from a right map with the values of a left map if the keys match
## Challenge
Write a function that LEFT JOINs two hashmaps into a single data structure.
The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.
The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic.
Avoid utilizing any of the library methods available to your language.
## Approach & Efficiency
This code challenge seemed pretty simple. At first i created an empty array to push the keys, and values from the maps and create an index counter to increment with each iteration of the left map. i defined a variable called rightValue that instantiates as null with every iteration that changes to the right maps value if the right and left keys match. i then set the output array at the current index equal to an array containing the left key and an array containing the left value and the variable rightValue. I then incremented the index counter. At the end i returned the output array. I then realized that i could modify one of the maps in place to avoid adding any new data structures aside from the rightValue variable. 

## Solution
[code/test](../master/code-challenges/leftJoin/left-join.test.js)</br>
![left-join](../master/assets/left-join.jpg)</br>

# Graphs
A graph is collection of nodes that may or may not be linked together by edges that may go one or both ways.

## Challenge
Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

AddNode()
Adds a new node to the graph
Takes in the value of that node
Returns the added node
AddEdge()
Adds a new edge between two nodes in the graph
Include the ability to have a “weight”
Takes in the two nodes to be connected by the edge
Both nodes should already be in the Graph
GetNodes()
Returns all of the nodes in the graph as a collection (set, list, or similar)
GetNeighbors()
Returns a collection of edges connected to the given node
Takes in a given node
Include the weight of the connection in the returned collection
Size()
Returns the total number of nodes in the graph

## Approach & Efficiency
For this challenge i decided to use a serries of maps to hold the nodes which are basically just values and have their value point to another map that contains the nodes connected to that particular node and the weight of that edge. Using hashmaps allow for very quick lookups (O(n)) which alow us to add edges to nodes without iterating through through any kind of list. 

## API
`addNode()` takes in a value as an input, checks to see if the node already exists

## solution
[code](../master/code-challenges/graph/graph.js)</br>
[test](../master/code-challenges/graph/graph.test.js)</br>


# Breadth First Graph
Write a function that performs a breadth-first traversal of a graph given an input node and returns the nodes in the order that they are traversed
## Challenge Description
Extend your graph object with a breadth-first traversal method that accepts a starting node. Without utilizing any of the built-in methods available to your language, return a collection of nodes in the order they were visited. Display the collection.
## Approach & Efficiency
For this method i created an array for the queue of nodes and a set to contain the nodes that have been visited as it is O(1) time to look up a node. I immediately set current to be the input node and push it to the queue. I used a while loop to run while the queue is populated. inside the loop we dequeue the next node and add it to the visited set and check to see if the current node has any adjacent nodes. If there are we need to use a for...of loop to iterate through the keys of the adjacency map to check to see if they have been visited and add them to the queue if not. I then return the visited list which will be in order that the nodes were traversed. The big O for time complexity is O(n(n-1)) as you have to visit every node once and also check all its adjacent nodes to know if it has been visited save for the input node. The space comlexity is O(n) because the queued and visited nodes will both equate to the whole graph as you only push to the queue if a node has not been visited and every node must be visited.

## Solution
[code](../master/code-challenges/breadthFirstGraph/breadth-first-graph.js)</br>
[test](../master/code-challenges/breadthFirstGraph/breadth-first-graph.test.js)</br>
![breadth-first-graph](../master/assets/breadth-first-graph.jpg)</br>

# Get Edge
Write a function that returns true if the nodes in the input array are lineary linked

## Challenge Description
Write a function based on the specifications above, which takes in a graph, and an array of city names. Without utilizing any of the built-in methods available to your language, return whether the full trip is possible with direct flights, and how much it would cost.

## Approach & Efficiency
For this method i instantiated an array to be be [true, 0] by default as as soon as a subsequent node is not adjacent to the current node I want to break out of any logic and return something else. I the start a for loop to iterate through the input array. Inside the loop I grab all of the current nodes neighbors. I add the next edges weight to the output's second element.I then check to see if the next node is a neighbor of the current node. If it isnt I set the output equal to [false, 0] otherwise I continue through the loop. If the loop goes all the way through without meeting the condition of the inner condition we return the aggregated output.

## Solution
[code](../master/code-challenges/getEdge/get-edge.js)</br>
[test](../master/code-challenges/getEdge/get-edge.test.js)</br>