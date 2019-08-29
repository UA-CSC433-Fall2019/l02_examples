//This javascript file has a few simple examples of
//function declarations, hoisting, and closures
//
//Author: Joshua Levine


//Note that factorial has not yet been declared.  That's fixed by
//hoisting.
function combination(n,k) {
  //Compute n!/(k!*(n-k)!)
  return factorial(n) / (factorial(k) * factorial(n-k));
}

//this causes an error, as the declaration is hoisted, but not
//definition, so neither of these will execute!
//console.log(factorial(4));
//console.log(combination(5,3));


//this is an alternate way (a = function()) to declare functions,
//THIS IS AN ANONYMOUS FUNCTION
var factorial = function(n) {
  //Compute n!
  if (n > 1) {
    return n*factorial(n-1);
  } else {
    return 1;
  }
}

console.log("3! is:",factorial(3));
console.log("5 choose 3 is:",combination(5,3));

//while declarations are hoisted, definitions are not, so this runs but
//reports the wrong value
console.log(a+"! is:",factorial(a));

var a = 10;

console.log(a+"! is:",factorial(a));


//Same as above but with closures
function comb(n,k) {
  //declare a function IN a function!
  function fact(n) {
    f = 1;
    while (n > 1) {
      f *= n;
      n--;
    }
    return f;
  }
  
  return fact(n) / (fact(k) * fact(n-k));
}

console.log("5 choose 3 is:",comb(5,3));

//can't call fact(), as it's defined within the scope of comb()
console.log("3! is:",fact(3));

