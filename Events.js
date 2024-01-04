let btn1=document.getElementById("btn1");
btn1.onclick = () =>{
    console.log("Clicked me");
}
let curMode="white";
// btn1.onclick = () =>{
//     console.log("Clicked me New One is used");
// }

//          Two ways to add the fucntion

// btn1.addEventListener('click',(event)=>{
//     console.log("function used");
//     console.log(event.type);
// });

btn1.addEventListener('click',printFunc);
function printFunc(){
    console.log("Print function used");
    (curMode==="white")?curMode="black":curMode="white";
    console.log("the mode is ",curMode);
    document.querySelector("body").style.background=curMode;
}
// to remove
// btn1.removeEventListener('click',printFunc);

let btn2=document.getElementById("btn2");
btn2.ondblclick = (e) =>{
    console.log("Clicked me 2x to check events of on mouse hover ",e.type," ",e.clientX," ",e.clientY);
}

let onhover =document.getElementById("box");
onhover.onmouseenter=()=>{
    console.log("OVER ME DADYY");
}
