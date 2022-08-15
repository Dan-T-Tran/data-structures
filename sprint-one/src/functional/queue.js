
var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (Object.keys(storage).length === 0) {
      storage[0] = value;
    } else {
      var lastIndex = Number(Object.keys(storage).slice(-1));
      storage[lastIndex + 1] = value;
    }
  };

  someInstance.dequeue = function() {
    var firstIndex = Object.keys(storage)[0];
    var firstValue = storage[firstIndex];
    delete storage[firstIndex];
    return firstValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
