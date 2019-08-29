//This javascript file has a few simple examples of
//closures and how they can be used with objects, and classes
//
//Author: Joshua Levine


//In Javascript, functions are like variables and can be returned
var function1 = function(a) {
  var function2 = function(b) {
    console.log(a,b);
  };
  return function2;
}


//Recall that Objects follow the notation:
//{ 
//  key1: value,
//  key2: value,
//  key3: value
//};
//important: values can be functions!

//this function returns an instance of a object
var makeCounter = function(n) {
  var result = {
    n: n,
    get: function() {
      return n;
    }, 
    increment: function() {
      n++;
    },
    decrement: function() {
      n--;
    }
  };
  return result;
}


//Modern Javascript allows classes to be defined with the `class`
//keyword.  Take care to use this appropriately.
class Counter {
  constructor(n) {
    this.n = n;
  }

  get() {
    return this.n;
  }

  increment() {
    this.n++;
  }

  decrement() {
    this.n--;
  }
}

//Classes are instantiated with new:
//let c = new Counter(5);

