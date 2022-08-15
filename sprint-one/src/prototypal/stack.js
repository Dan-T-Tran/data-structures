var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(stackMethods);

  return storage;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var storageKeys = Object.keys(this);
  var keyLength = storageKeys.length;
  if (keyLength === 0) {
    this[0] = value;
  } else {
    this[keyLength] = value;
  }
};

stackMethods.pop = function() {
  var lastIndex = Object.keys(this).slice(-1);
  var lastValue = this[lastIndex];
  delete this[lastIndex];
  return lastValue;
};

stackMethods.size = function() {
  return Object.keys(this).length;
};


