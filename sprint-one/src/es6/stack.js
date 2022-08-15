class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.index = 0;
  }

  push(value) {
    this[this.index] = value;
    this.index++;
  };

  pop() {
    if (this.index > 0) {
      this.index--;
    }
    var lastValue = this[this.index];
    delete this[this.index];
    return lastValue;
  };

  size() {
    return Object.keys(this).length - 1;
  };

}

