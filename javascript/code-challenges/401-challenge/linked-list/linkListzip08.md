# linked-list-zip

Done with: Steven Rejdukowski and Elias Staehle

## Challenge

* Write a function called zip lists
* Arguments: 2 linked lists
* Return: New Linked List, zipped as noted below
* Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the the zipped list.
* Try and keep additional space down to O(1)
* You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.


## Approach & Efficiency

recurrsion approch using the code challange 8 review video following along.

`zipList(list1, list2){
    let current1 = list1.head;
    let current2 = list2.head;
    while(current1 && current2 !== null){
      let next1 = current1.next.node;
      let next2 = current2.next.node;
    }if(next1 !== null){
      current2.next.node = next1;
      current1 = next1;
      current2 = next2;
    }
    return list1;
  }`

[code challange08](../../screenshots/challange08.jpg);
[review resub](../../screenshots/linklistzip08.png)
