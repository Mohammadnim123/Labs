'use strict'
var Q1 = prompt('What is the product of summing 1 + 1 to write your answer?');
var Q2 = prompt('What is your favorite movies ?');
var Q3 = prompt('Type your triple name?');
 
var ans1 ;

if (Q1 == 2){
    ans1 = 'you are smart good';
}
else {
    ans1 = 'wrong try again';
}

document.write('<p id="Q2">'+ans1+'</p>');
document.write('<p id="Q2">'+Q2+'</p>');
document.write('<p id="Q3">'+Q3+'</p>');