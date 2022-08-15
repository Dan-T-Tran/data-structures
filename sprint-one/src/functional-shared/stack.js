var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};

  _.extend(storage, stackMethods);

  return storage;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var storageKeys = Object.keys(this).slice(0, -3);
  var keyLength = storageKeys.length;
  var lastIndex = Number(storageKeys.slice(-1));
  if (keyLength === 0) {
    this[0] = value;
  } else {
    this[lastIndex + 1] = value;
  }
};

stackMethods.pop = function() {
  var storageKeys = Object.keys(this).slice(0, -3);
  var lastIndex = storageKeys.slice(-1);
  var lastValue = this[lastIndex];
  delete this[lastIndex];
  return lastValue;
};

stackMethods.size = function() {
  return Object.keys(this).length - 3;

}