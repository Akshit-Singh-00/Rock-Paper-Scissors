let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genComputerChoice =()=>{
     const options =["rock","paper","scissors"];
     const randInx=Math.floor(Math.random()*3);
     return options[randInx]
}

const drawGame =()=>{
    console.log("game was draw");
    msg.innerText="Game Draw ! play again";
    msg.style.backgroundColor="rgb(0, 0, 0)"
}

const showWinner =(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore ++;
        userScorePara.innerText=userScore
        console.log("You win");
        msg.innerText=`You Win! Yours ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="Green"
    }
    else{
        compScore ++;
        compScorePara.innerText = compScore;
        console.log("You Lose")
        msg.innerText=`You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red"

    }
}

const playGame = (userChoice)=>{
console.log("user choice=",userChoice);
const compChoice = genComputerChoice();
console.log("comp choice=",compChoice);
if(userChoice === compChoice){
drawGame();
}
else{
    let userWin = true;
    if(userChoice ==="rock"){
        userWin=compChoice === "paper"? false:true;
    }
    else if(userChoice === "paper"){
        userWin=compChoice === "scissors"? false : true;
    }
    else{
        userWin=compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
}
}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
// console.log("choice was clicked",userChoice);
playGame(userChoice);
    })
})