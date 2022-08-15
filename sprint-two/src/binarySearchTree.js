var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {

  var traverseNode = function(node, value) {
    // if (node.value === undefined) {
    //   node = BinarySearchTree(value);
    //   return;
    // }

    if (value < node.value) {
      if (node.left === null) {
        node.left = new BinarySearchTree(value);
      } else {
        traverseNode(node.left, value);
      }

    } else {
      if (node.right === null) {
        node.right = new BinarySearchTree(value);
      } else {
        traverseNode(node.right, value);
      }
    }
  };
  traverseNode(this, value);
  console.log(this);
};

/*
binarySearchTree = {
  value: 5,
  left: null,
  right: null,
  // insert: function,
  // contains: function,
  // depthFirstLog: function
}
*/

/*
binarySearchTree = {
  value: 5,
  left: {
    value: 2,
    left: null,
    right: {
      value: 3,
      left: null,
      right: null
    }
  },
  right: null,
  // insert: function,
  // contains: function,
  // depthFirstLog: function
}
*/

/*
  binarySearchTree.insert(2);
  binarySearchTree.insert(3);
  binarySearchTree.insert(7);
  binarySearchTree.insert(6);
  expect(binarySearchTree.left.right.value).to.equal(3);
  expect(binarySearchTree.right.left.value).to.equal(6);
*/


/*
binarySearchTree.left = {
  value: 2,
  left: null,
  right: null,
  ...
}
*/

BinarySearchTree.prototype.contains = function(value) {
  var result = false;

  var traverseNode = function(node, value) {
    if (value === node.value) {
      result = true;
      return;
    }
    if (value < node.value) {
      if (node.left === null) {
        return;
      } else {
        traverseNode(node.left, value);
      }
    } else {
      if (node.right === null) {
        return;
      } else {
        traverseNode(node.right, value);
      }
    }
  };

  traverseNode(this, value);

  return result;
};

/*
AssertionError: expected [ 5, 2, 7 ] to deeply equal [ 5, 2, 3, 7 ]
                                                            ^^^
var array = [];
var func = function(value) { array.push(value); };
binarySearchTree.insert(2);
binarySearchTree.insert(3);
binarySearchTree.insert(7);
binarySearchTree.depthFirstLog(func);
expect(array).to.eql([5, 2, 3, 7]);
*/


BinarySearchTree.prototype.depthFirstLog = function(cb) {

  var traverseNode = function(node) {
    cb(node.value);
    if (node.left !== null) {
      traverseNode(node.left);
    }
    if (node.right !== null) {
      traverseNode(node.right);
    };
  }

  traverseNode(this);
};
/*
 * Complexity: What is the time complexity of the above functions?
 */


/*
First insertion: 2
var testTree = new BinarySearchTree()
BinarySearchTree.insert(2);
{
  value: 2
  left: 1
  right: 6
}
new value: 0
*/
//method object works
//why does prototype not?
//is each instance of binarysearchtree have a property of insert?
