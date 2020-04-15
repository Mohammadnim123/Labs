'use strict'


var Q0 = prompt('Enter your name ? (this page just for ahmad)');
if(Q0==null)
{
    Q0="notfound";
}
var names = new Array();
while (Q0.localeCompare("ahmad") != 0) {
    names.push(Q0);
    var Q0 = prompt('Enter your name ? (this page just for ahmad)');
}
console.log(names);
var Q00 = prompt("Enter number ?");
var number=parseInt(Q00);
if(number>1){
for (var index = 1; index <= number; index++) {
console.log(index);
}
}else{

}
var Q1 = prompt('What is the product of summing 1 + 1 to write your answer?');
var Q2 = prompt('What is your favorite movies ?');
var Q3 = prompt('Type your triple name?');
var Q4 = prompt('how old are you ?');
function yourAge(Q4) {
    Q4 = parseInt(Q4);
    var yourYear = 2020 - Q4;
    return document.write('<p id="Q4">' + yourYear + '</p>');
}
console.log(Q4);
yourAge(Q4);
var ans1;
if (Q1 == 2) {
    ans1 = 'you are smart good';
}
else {
    ans1 = 'wrong try again';
}



document.write('<p id="Q2">' + ans1 + '</p>');
document.write('<p id="Q2">' + Q2 + '</p>');
document.write('<p id="Q3">' + Q3 + '</p>');
