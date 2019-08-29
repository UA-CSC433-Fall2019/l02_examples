//This javascript file has a few simple examples of
//accessing elements with the DOM and setting up listeners
//
//Author: Joshua Levine


//changing a property of a div
document.getElementById("mydiv").innerHTML = "hello";

//responding to input button
var clicked_button = function() {
  document.getElementById("mydiv").innerHTML = "button clicked";  
  console.log("You clicked the button");
}


//responding to a click event
var clicked_href = function() {
  document.getElementById("mydiv").innerHTML = "href clicked";  
  console.log("You clicked the href");
  //without the following, the page redirects!
  //document.getElementById("myhref").href = "#";
}


//responding to input number
var changed_number = function() {
  document.getElementById("mydiv").innerHTML = "changing number";  
  console.log("You changed the number");
}



document.getElementById("myhref").addEventListener("click",clicked_href);
document.getElementById("mybutton").addEventListener("click",clicked_button);
document.getElementById("mynumber").addEventListener("change",changed_number);

