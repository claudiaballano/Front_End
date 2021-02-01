# Array methods

## Some: 
It tells you if any of the elements of the object meet the condition that you have passed
## Every: 
It tells you if all of the elements of the object meet the condition that you have passed
## Find: 
Find is like filter, but instead returns just the one you are looking for
## findIndex()
Find the comment with this ID--> find where something is inside the array
## splice()
It can be used for delete 

It is common in programming to create a new array with those values ​​that you do not want to eliminate. In the example it creates a new array, through the "spred operator" and eliminates the value of "index" that it has obtained before.

    const newComments = [
      ...comments.slice(0, index),
      ...comments.slice(index + 1)
    ];
## filter()
## map()
give us a new array
## sort()
## reduce()

## from()
   