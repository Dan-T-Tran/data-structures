var Queue = function() {
  this.index = 0;
  this.deleteIndex = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.index] = value;
  this.index++;
};

Queue.prototype.dequeue = function() {
  var firstValue = this[this.deleteIndex];
  delete this[this.deleteIndex];
  this.deleteIndex++;
  return firstValue;
};

Queue.prototype.size = function() {
  return Object.keys(this).length - 2;
}

/*
The dequeue will end up incrementing the index infinitely, but not sure how
to solve just yet.
*/