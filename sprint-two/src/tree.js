var Tree = function(value) {
  var newTree = {};

  _.extend(newTree, treeMethods);

  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // []
  /*
  Add node with value into array with properties: value, children
    Children will initially be an empty array
  newTree.children.push({value: value, children: []})
  */
  var garboObj = {value: value, children: []};
  _.extend(garboObj, treeMethods)
  this.children.push(garboObj);
};

treeMethods.contains = function(target) {
  /*
  GOAL: Check every child. If child's value === target, return true
  ISSUE: How to check every child?
    #1 Guess: Recursion
      Base case: If children.length === 0, return?
      Parent tree if recursion case is that if children tree has childrens property with length > 0, then iterate over that children property
  */
  var output = false;

  var traverseNodes = function(node, target) {
    if (node.value === target) {
      output = true;
      return;
    }
    /*
    If a node contains target, set output to true
    */
    for (var i = 0; i < node.children.length; i++) {
      traverseNodes(node.children[i], target);
    }
  }

  traverseNodes(this, target)

  return output;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

// .children property, an array containing a number of subtrees
//  .addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
//  A .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node

/*
var newtree = {
  [{value: 1,
    children: []
  },
  {value: 2,
    children: [
      {value: 10,
      children: []}
    ]}
  ]
}
*/