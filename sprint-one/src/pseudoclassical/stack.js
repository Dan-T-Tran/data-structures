var Stack = function() {
  this.index = 0;
};


Stack.prototype.push = function(value) {
  if (this.index === 0) {
    this[0] = value;
  } else {
    this[this.index] = value;
  }
  this.index++;
};

Stack.prototype.pop = function() {
  if (this.index > 0) {
    this.index--;
  }
  var lastValue = this[this.index];
  delete this[this.index];
  return lastValue;
};

Stack.prototype.size = function() {
  return Object.keys(this).length - 1;
};