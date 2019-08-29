//This javascript file has a few simple examples of variable
//declarations
//
//Author: Joshua Levine

var myprimitive = 5;
myprimitive = "hello";   


var myarray = [1,2,3];
myarray.push(4);
myarray.push("goodbye");
myarray[100] = 5;


var myobject = {
  prop1: 6,
  prop2: 'howdy'
};

//object properties can be accessed with . or with []:
myobject.prop1 = 4;
var str = "prop1";
myobject[str] = 4;

console.log(myobject);

function someFunction() {
  var n = 5;
  console.log(n);
}

//can't access n outside of someFunction
//n = 10;
