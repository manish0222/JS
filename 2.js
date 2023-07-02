if(7>8){
    console.log(true);
}
else if(8<10){
    console.log('andy');
}
else{
    console.log(false);
}
var day='wed';
if(day == 'wed'){
    console.log('Day 3');
}
else if(day == 'tues'){
    console.log('Day 2');
}
else if(day == 'mon'){
    console.log('Day 1');
}else{
    console.log('sunday');
}

switch(day){
    case('wed'):
        console.log('Day 3 in switch');
        break;
    case('tue'):
        console.log('Day 2 in switch');
        break;
    case('mon'):
        console.log('Day 1 in switch');
        break;
    default:
        console.log('Day none in switch');
        break;
}
var a=(5>6);
console.log(a+' '+typeof(a));

var count=12;
console.log(typeof(count) +' '+count++ +' ' + count + ' '+ ++count);
count/=4;
console.log(count+' imp note count nd modulo of count '+count%2);

if(5==5){console.log(true);}
if(5=='5'){console.log(true+ 'check the == sign');}else{console.log('false');}
if(5==='5'){console.log(true);}else{console.log('false   and also check the === sign');}
if(5!=='5'){console.log(true + ' check !== sign ');}else{console.log('false   and also check the === sign');}

if(5>=3 && 7<=7){console.log('&& operator used');}
if(5>=3  ||  7>7){console.log(' ||  operator used');}

5>6? console.log('false in ternary'):console.log('true in ternary')


console.log(' Implicit conversion is to string else use parse--');
console.log(null+'5 '+234+' 54.'+34.9892+' '+false);
console.log(5+'5');
console.log(typeof(null+'5'+234));

// console.log("if 0 , not null , undefined ," '' " is true ");
if(null){console.log(false);}
else if(undefined){console.log(false);}
else if(0){console.log(false);}
else if(''){console.log(false);}
else if(-8 && 'apple' ){console.log('truthdefined');}
// else{}
console.log('Explicit conversion');
console.log(String(423)+Number("4243.5")+Number(true));
console.log(Boolean('') + Boolean(0)+Boolean(null));

/*                                                 Output
andy
Day 3
Day 3 in switch
false boolean
number 12 13 14
3.5 imp note count nd modulo of count 1.5
true
truecheck the == sign
false   and also check the === sign
true check !== sign 
&& operator used
 ||  operator used
true in ternary
 Implicit conversion is to string else use parse--
null5 234 54.34.9892 false
55
string
truthdefined
Explicit conversion
4234243.51
0
*/
