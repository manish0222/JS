console.log("\n\n       Hoisting of variables and functions \n")
console.log("Functions in JavaScript local variables are preferred");
var total =10;
console.log('addition before declaring '+addn(123,3));
function addn(a=40,b){
    var total=9;
    console.log(typeof(a)+' '+total);
    return a+b;
}
function Greetings(){
    console.log("hello done using functions");
}
console.log(addn(4,'5'));
console.log(addn(4,45.5));
Greetings();
console.log('javaScript has using variable & laterits declaration');
num1=110;
console.log(num1);
var num1;
console.log(str1);
str1="hello all";
console.log(str1);
var str1;
/*
Hoisting of variables and functions 

Functions in JavaScript local variables are preferred
number 9
addition before declaring 126
number 9
45
number 9
49.5
hello done using functions
javaScript has using variable & laterits declaration
110
undefined
hello all
*/
