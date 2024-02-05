//game create
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg  = document.querySelector("#msg");

const genCompChoice = () =>{
    const options  = ["rock","paper","scissors"];
   const randIdx =  Math.floor(Math.random()*3);
   return options[randIdx];


};
const drawGame = ()  => {
    console.log("game was draw");
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "#081b31";

};
const showWinner = (userWin) => {
    if(userWin){
        console.log("you win");
        msg.innerText = "you win!";
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("you lost");
        msg.innerText = "you lose!";
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
  console.log("user choice is =",userChoice);
  //generate comp choice
  const CompChoice = genCompChoice();
  console.log("computer choice is = ",CompChoice);


  if(userChoice === CompChoice){
    //draw game
    drawGame();

  }
  else{
    let userWin = true;
    if(userChoice === "rock"){
        //scissors,paper
       userWin =  CompChoice ==="paper" ? false : true;
    }
    else if(userChoice ==="paper"){
        //rock,scissors
        userWin = CompChoice ==="scissors" ? false : true;
    }
    else{
        //rock,paper
        userWin = CompChoice ==="rock" ? false : true;
    }
   showWinner(userWin);
  }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
