var LinkedList = function() {
  var list = {};
  list.head = null; //node 1
  list.tail = null; //node 2

  list.addToTail = function(value) {
    //if list.head is null
    if (list.tail === null) {
      //assign the node to the list.head prop
      list.tail = Node(value); //
    } else {
      if (list.head === null) {
        list.head = list.tail;
      }
      list.tail = Node(value); // 5
      //creating the tail
      //while node.next is not equal to null
      var nodeCheck = list.head;
      while (nodeCheck.next !== null) {
        nodeCheck = nodeCheck.next;
      }
      nodeCheck.next = list.tail;
    }
  };

  list.removeHead = function() {
    //if list.head is null/undefined
    if (list.head === null) {
      //return tail instead
      return list.tail.value;
    }
    //create a result var
    //assign head value to the result variable
    var headVal = list.head.value;
    var nodeCheck = list.head;
    //while loop (nodecheck)
    while (nodeCheck.next !== null) {
      nodeCheck.value = nodeCheck.next.value;
      nodeCheck = nodeCheck.next;
    }
    return headVal;
  };

  list.contains = function(target) {
  //if the target does not exist in the current node
    if (list.head.value === target) {
      return true;
    } else {
      var nodeCheck = list.head;
      while (nodeCheck !== null) {
        if (nodeCheck.value === target) {
          return true;
        }
        nodeCheck = nodeCheck.next;
      }
      return false;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//
