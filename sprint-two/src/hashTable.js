

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._keyValuePairs = 0;
};

//when would we double it?
  //only when we're adding more indexes than available? *
  //whenever we call for the function to double it?
  //



HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined) {
    this._storage[index] = [[k, v]];
    this._keyValuePairs++;
    if (this._keyValuePairs / this._limit >= 0.75) {
      this._resize(this._limit * 2);
    }
  } else {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i].indexOf(k) !== -1) {
        this._storage[index][i][1] = v;
        return;
      }
    }
    this._storage[index].push([k, v]);
    this._keyValuePairs++;
    if (this._keyValuePairs / this._limit >= 0.75) {
      this._resize(this._limit * 2);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //look at the storage at that particular index
  //in the case we have multiple values in bucket
  if (this._storage[index] !== undefined) {
    if (this._storage[index].length > 1) {
    //iterate over the bucket
      for (var i = 0; i < this._storage[index].length; i++) {
        if (this._storage[index][i].indexOf(k) !== -1) {
        //return the key/value pair that has the particular key value
          return this._storage[index][i][1];
        }
      }
    }
    if (this._storage[index].length <= 0) {
      return undefined;
    }
    return this._storage[index][0][1];
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i].indexOf(k) !== -1) {
      this._storage[index].splice(i, 1);
      this._keyValuePairs--;
      if (this._keyValuePairs / this._limit <= 0.25) {
        this._resize(this._limit / 2);
      }
    }
  }
};

HashTable.prototype._resize = function(newLimit) {
  var oldStorage = this._storage;

  this._limit = newLimit;
  this._storage = LimitedArray(newLimit);
  this._keyValuePairs = 0;
  var context = this;

  oldStorage.each(function(bucket) {
    if (!bucket) {
      return;
    }
    for (var i = 0; i < bucket.length; i++) {
      context.insert(bucket[i][0], bucket[i][1]);
    }
  });
};






/*
 * Complexity: What is the time complexity of the above functions?
 */


/*
Situation:
As the limit-size increases when doubling, so does our hashing function algorithm.
hashing function now sets different keys for same input values
resulting in difficulty locating the previously set key in the new indices set by the algorithm.

Options to consider:
Brute forcing each instance of limit doubling to search through the entire storage rather than a particular index to find the key/value pair
  pros: Will eventually find the key/value pair if it exists

  cons: time complexity becomes O(n^2) as we have to iterate both through the indexes and the buckets within.
        can possibly lead to every time we retrieve an unset key to having to iterate through the entirety of the array
          (can code to possibly avoid this)

When the function detects that the limit has changed, we would callback each key/value pair at indices and utilize our new hashing function to reassign them into
their new respective indices.
detect limit change --> iterate through array --> storage[index]
  pros: not brute forcing

  cons: iterate through the entirety of the arra







*/