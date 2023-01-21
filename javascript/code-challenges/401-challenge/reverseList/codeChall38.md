# Challenge Summary

Code challange 38 i had trace pick out a challange and he had me reverse nodes in a link list

## Whiteboard Process

[UML](../../screenshots/codechall38.png)

## Approach & Efficiency

i took the list and reassigned the values of the pointers and nodes. to reverse the lst and to have the proper outcome

## Solution

`
function reverseList(node){
 let current = node;
 let next = null;
 let previous = null:

 while( currret !== null ){
  next = current.next;
  current.next = previous;
  previous = current;
  current = next;
 }
  node = previous;
  return node:
}

console.log(reverseList);
`
