let userScore=0;
let compScore=0;
const choices=document.querySelectorAll('.choice');
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector('.userscore');
const compScorePara=document.querySelector('.compscore');
const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        // console.log("User win");
        msg.innerText=`Your ${userChoice} Wins over ${compChoice}`;
        msg.style.backgroundColor='green';
        userScore++;
        userScorePara.innerText=`${userScore}`;
    }
    else{
        // console.log("User Lose");
        msg.innerText=`Your ${userChoice} Loses over ${compChoice}`;
        msg.style.backgroundColor='red';
        compScore++;
        compScorePara.innerText=`${compScore}`;
    }
}
const getChoice =() =>{
    let val=["rock","paper","scissor"];
    return val[Math.floor(Math.random()*3)];
}
const playGame = (userChoice) =>{
    console.log("user choice is ",userChoice);
    //comp choice
    let compChoice=getChoice();
    console.log("Comp choice is ",compChoice);

    if(userChoice===compChoice){
        console.log("Game Drawn");
        msg.innerText="Draw Game";
        msg.style.backgroundColor= '#081b31';
    }
    else{
        let userWin=true;
        if(userChoice==="rock" && compChoice==="paper"){
            userWin=false;
        }
        else if(userChoice==="paper" && compChoice==="scissor"){
            userWin=false;
        }
        else  if(userChoice==="scissor" && compChoice==="rock"){
            userWin=false;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}
choices.forEach((choice) => {
    console.log(choice); 
    choice.addEventListener("click",()=>{
        const choice_id=choice.getAttribute("id");
        playGame(choice_id);
    })
})