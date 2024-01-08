const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdown=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const arrow=document.getElementById("arrow");

for(let select of dropdown){
    for(currCode in countryList ){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name === "from" && currCode==="USD"){
            newOption.selected="selected";
        }
        else if(select.name === "to" && currCode==="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);
        select.addEventListener("change",(evt)=>{
            //arg0: Event {isTrusted: true, type: 'change', target: select, currentTarget: select, eventPhase: 2, …} and 
            //evt.target = select;
            updateFlag(evt.target);
        });
    }
}
const swapCurr = async() =>{
    let a=fromCurr.value;
    let b=toCurr.value;
    let newFlagUrl1=`https://flagsapi.com/${countryList[a]}/flat/64.png`;
    let newFlagUrl2=`https://flagsapi.com/${countryList[b]}/flat/64.png`;
    // let img1=document.getElementsByClassName("img1");
    // img1[0].src=newFlagUrl2;
    let img1=document.querySelector(".img1");
    let img2=document.querySelector(".img2");
    console.log(img1);
    img1.src=newFlagUrl2;
    img2.src=newFlagUrl1;
    fromCurr.value=b;
    toCurr.value=a;
    updateExchangeRate();
}
const updateFlag = (ele)=>{
    //the evt is select
    let curCode=ele.value;
    let countryCode=countryList[curCode];
    let newFlagUrl=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img= ele.parentElement.querySelector("img");
    img.src=newFlagUrl;
};
const updateExchangeRate = async() => {
    let amount = document.querySelector(".amount input");
    let amt=amount.value;
    if(amt==="" || amt<1){
        amt=1;
        amount.value="1";
    }
    // console.log("Val ",fromCurr.value.toLowerCase(),toCurr.value.toLowerCase());
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    console.log(URL);
    let response = await fetch(URL);
    let data= await response.json();
    let rate =data[toCurr.value.toLowerCase()];

    let finalAmt=amt*rate;
    console.log("Is",finalAmt);
    msg.innerText=`${amt} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`;
}
btn.addEventListener("click",(evt)=>{
    evt.preventDefault();  //saves defaulting
    updateExchangeRate();
});

arrow.addEventListener("click",function (){
    swapCurr();
})
window.addEventListener("load", () => {
    updateExchangeRate();
});