console.log('Maps or Objects in JavaScript');
var mp={
    'manish':'godboles',
    'raj':'gharat',
}
console.log(mp);
console.log(mp.manish);
var obj={
    address : {
        'lane':'32',
        'top':'yashodham',
    },
    name:'manish',
    surName:'godbole',
}
console.log(obj);
console.log(obj.address);
console.log(obj.address.top);
console.log('Arrays in JavaScript push pop splice sort() reverse()');
var arr=['232',4324,2355345.52,'false',null,Infinity];
console.log(arr);
arr.push('happy');
arr.push('don');

var int=arr.pop();
console.log(arr);
console.log('poped  item is '+int);
console.log('Splice has 4 arguments \n1 is index to start \n2 d is no of terms to be deleted \n3) and ahead other inserted from that location');
arr.splice(4,2,'mack',54543453,true);
console.log(arr);
arr.splice(2,2);
console.log(arr);
arr.sort();
arr.reverse();
console.log(arr);
console.log('Loops in JavaScript for while and break');
for(var i=0;i<arr.length;i++){
    if(i===2){continue;}
    console.log(arr[i]+ ' '+typeof(arr[i]));
}
/*
node /tmp/mcSTAcsw7b.js
Maps or Objects in JavaScript
{ manish: 'godboles', raj: 'gharat' }
godboles
{
  address: { lane: '32', top: 'yashodham' },
  name: 'manish',
  surName: 'godbole'
}
{ lane: '32', top: 'yashodham' }
yashodham
Arrays in JavaScript push pop splice sort() reverse()
[ '232', 4324, 2355345.52, 'false', null, Infinity ]
[ '232', 4324, 2355345.52, 'false', null, Infinity, 'happy' ]
poped  item is don
Splice has 4 arguments 
1 is index to start 
2 d is no of terms to be deleted 
3) and ahead other inserted from that location
[
  '232',      4324,
  2355345.52, 'false',
  'mack',     54543453,
  true,       'happy'
]
[ '232', 4324, 'mack', 54543453, true, 'happy' ]
[ true, 'mack', 'happy', 54543453, 4324, '232' ]
Loops in JavaScript for while and break
true boolean
mack string
54543453 number
4324 number
232 string

*/
