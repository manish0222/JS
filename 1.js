console.log("Welcome to Programiz!");
var varName="hello"
console.log(varName)
console.log(typeof(varName))
console.log("ram "+varName)
var a=45.67;
console.log(typeof(a))
console.log(a.toFixed(4));
var arr="131.897 \"ramam\" ram";
console.log(parseFloat(arr)+" "+ arr.length);
console.clear();
console.log(arr.indexOf("ama"));
console.log(arr.lastIndexOf("ram"));
var s=arr.slice(0,5);
var str=arr.slice(-7);
var str2=arr.slice(10,2);
console.log(s.toLowerCase()+ ' '+str.toUpperCase() + ' '+str2 );
console.log(s.charAt(3));
var mp=arr.split(' ');


/*
hello
string
ram hello
number
45.6700
131.897 19
10
16
131.8 AM" RAM 
.
131.897,"ramam",ram 131.897 "ramam" ram
null
*/
