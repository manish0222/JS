console.log("1");
console.log("2");
const hello =()=>{
    console.log("Hello");
}
console.log("3");
setTimeout(hello,1500);
setTimeout(()=>{
    console.log("Hello 2nd")
},2500);
console.log("4");
console.log("5");
// Output
// callBack represent function sent as an argument to a function
function sum(a,b){
    console.log(`Sum is ${a+b}`);
}
function calc(a,b,sumfunc){
    sumfunc(a,b);
}
// calc(3,4,sum()); // Error as we pass function as an argument not function call
calc(3,4,sum);


// function getData(dataid){
//     setTimeout(()=>{
//         console.log("THe data ",dataid);
//     },2000);
// }

function getData(dataid,nextDataId){
    setTimeout(()=>{
        console.log("THe data ",dataid);
        if(nextDataId){
             nextDataId();
        }
    },2000);
}
getData(1,() =>{
    console.log("GEtting data 2");
    getData(2, () =>{
        console.log("GEtting data 3");
        getData(3);
    });
});

//avoid above coding by promise function  having callbacks resolve and reject
// the result can be
// Pending  undefined
// Resolvd  resolve
// Rejected reject
let promise=new Promise((resolve,reject)=>{
    console.log("Inside Promise");
    resolve("12"+7);
    // reject("Uncaught error say");
});
console.log(promise);
