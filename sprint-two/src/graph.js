

// Instantiate a new graph
var Graph = function() {
  this.adjacencyList = [];
  this.nodeList = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    //Maybe check if node already present if nodes are unique
  this.nodeList.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodeList.length; i++) {
    if (this.nodeList[i] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodeList.length; i++) {
    if (this.nodeList[i] === node) {
      this.nodeList.splice(i, 1);
    }
  }
  for (var i = 0; i < this.adjacencyList.length; i++) {
    if (this.adjacencyList[i].indexOf(node) !== -1) {
      this.adjacencyList.splice(i, 1);
      i--;
    }
  }
};
//adjList = [5-2, 3-4, 1-5, 6-2, 7-5] //[5]
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) { //245 , 5123 [5245-245, 3-1]
  for (var i = 0; i < this.adjacencyList.length; i++) {
    if (this.adjacencyList[i].indexOf(fromNode) !== -1 && this.adjacencyList[i].indexOf(toNode) !== -1) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    this.adjacencyList.push(fromNode + '-' + toNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.adjacencyList.length; i++) {
    if (this.adjacencyList[i].indexOf(fromNode) !== -1 && this.adjacencyList[i].indexOf(toNode) !== -1) {
      this.adjacencyList.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
    for (var i = 0; i < this.nodeList.length; i++) {
        cb(this.nodeList[i]);
    }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
Graph = {
   adjacencylist: [5-3, 7-2, 5-2, 2-5]
   nodeList : [5, 3, 7, 2]
}
*/

