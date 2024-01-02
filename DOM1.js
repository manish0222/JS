// window.console.log(window)
// console.log(window.document)

console.dir(document.body)
console.log(document.body)

//window -> doc -> body -> tags
// document.body.style.background="yellow"; // make background color pink
document.body.childNodes[3].style.background='orange';


// if script is written after the body end then DOM elements are accessed
//our code makes script run after body as written at the end

// else the console.log(window.document ) prints null as its not access
// above line states script run before body

//we have get elements by class name and get elements by id is also there 
let heads= document.getElementsByClassName("headClass");
console.dir(heads);
console.log(heads);

// now try for class and id that is not present in the html code
let op=document.getElementsByClassName("value"); //empty array or collection
let op2=document.getElementById("values"); //op is null 
console.log(op," ",op2);
console.dir(op," ",op2);

// to get all tags 
let tagVal=document.getElementsByTagName("h1");
console.log("This tag ",tagVal);
console.dir("This tag ",tagVal);

//using queryselector for generalization
// for clas use as following 
//let ele=document.querySelectorAll(".className");

let ele=document.querySelectorAll("h1");
console.log("This ele ",ele);
console.dir("This ele ",ele);

//get children text innerText  innerHtml  textContent
let child=document.querySelector("body").children;
console.log("This child ",child);
console.dir("This child ",child);


//inner text
let txt=document.querySelector("div");
// let txt=document.querySelector("div").innerText;
console.log("This innerText ",txt.innerHTML);
console.dir("This innerText ",txt.innerHTML);
txt.innerHTML="<div>Hello</div>"; //relmoves unordered list
txt.innerHTML=txt.innerHTML+"<div>Appendied Hello </div>"; //removes unordered list

/*      OUPTUT IN SHORT
body
 
body

HTMLCollection(2)

HTMLCollection(2) [h1.headClass, h1.headClass]

HTMLCollection []
 ' ' null

HTMLCollection(0)
This tag  
HTMLCollection(2) [h1.headClass, h1.headClass]
This tag 
This ele  
NodeList(2) [h1.headClass, h1.headClass]
This ele 
This child  
HTMLCollection(9) [h1.headClass, h1.headClass, pre, div, label, br, br, button.button1, script, button1: button.button1]
This child 
This innerText  
        <h2>Fruits</h2>
        <ul type="square">
            <li>Apple</li>
            <li>Mango</li>
            <li>Pear</li>
        </ul>
    
This innerText 
*/
