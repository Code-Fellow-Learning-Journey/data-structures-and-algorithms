class Node {
  constructor(item) {
    this.data = item;
    this.left = null;
    this.right = null;
  }
}

var root;
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
}


root = Node(10);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(7);
root.left.right = new Node(8);
root.right.right = new Node(15);
root.right.left = new Node(12);
root.right.right.left = new Node(14);


return leftViewWhen(root);
