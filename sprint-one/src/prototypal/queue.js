var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(queueMethods);

  return storage;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var storageKeys = Object.keys(this);
  var keyLength = storageKeys.length;
  if (keyLength === 0) {
    this[0] = value;
  } else {
    var lastIndex = Number(storageKeys.slice(-1));
    this[lastIndex + 1] = value;
  }
};

queueMethods.dequeue = function() {
  var firstIndex = Object.keys(this)[0];
  var firstValue = this[firstIndex];
  delete this[firstIndex];
  return firstValue;
};

queueMethods.size = function() {
  return Object.keys(this).length;
};