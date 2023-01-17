# Challenge Summary
Code challange 37 i worked on binary trees. i did an assignment where i needed to find a way to print only the left side values of a binary tree.

## Whiteboard Process
[UML](../../screenshots/chall37.png)

## Approach & Efficiency
i took a rucurrsion route. trying to learn the basics of recursion and even though my code is not workiing i plan on comming back and re attemting with a ta or instructor when im able to get caught up and try to learn form the review vods

## Solution



`var root;
var maxLevel = 0;

function leftViewWhen(node, level) {
  if (node === null) {
    return;
  }
  if (maxLevel < level) {
    document.write(' ' + node.data);
    maxLevel = level;
  }
  leftViewWhen(node.left, level + 1);
  leftViewWhen(node.right, level + 1);
}`

- even though this isnt working or i cant get the issue solved with notes this is my base submission
