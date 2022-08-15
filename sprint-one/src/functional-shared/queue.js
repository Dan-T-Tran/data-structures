var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};

  _.extend(storage, queueMethods);

  return storage;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var storageKeys = Object.keys(this).slice(0, -3);
  var keyLength = storageKeys.length;
  if (keyLength === 0) {
    this[0] = value;
  } else {
    var lastIndex = Number(storageKeys.slice(-1));
    this[lastIndex + 1] = value;
  }
};

queueMethods.dequeue = function() {
  var storageKeys = Object.keys(this).slice(0, -3);
  var firstIndex = storageKeys[0];
  var firstValue = this[firstIndex];
  delete this[firstIndex];
  return firstValue;
};

queueMethods.size = function() {
  return Object.keys(this).length - 3;
};