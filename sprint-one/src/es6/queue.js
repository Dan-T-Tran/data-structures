class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.index = 0;
    this.deleteIndex = 0;
  }

  enqueue(value) {
    this[this.index] = value;
    this.index++;
  };

  dequeue() {
    var firstValue = this[this.deleteIndex];
    delete this[this.deleteIndex];
    this.deleteIndex++;
    return firstValue;
  };

  size() {
    return Object.keys(this).length - 2;
  };
}
