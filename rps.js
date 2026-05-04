let playerscore = 0;
let computerscore = 0;

function computerchooses(){

options = ["ROCK","PAPER", "SCISSORS"];
let randindex = Math.random()*3;
let finalchoice = Math.floor(randindex);
return options[finalchoice];
}

function play(playerchoice){

const computerchoice = computerchooses();

let result = "";

if(playerchoice==computerchoice){
    result =`Game Drawn! Both chose ${playerchoice}`;
}

else if (

(playerchoice=="ROCK" && computerchoice=="SCISSORS") ||
(playerchoice=="SCISSORS" && computerchoice=="PAPER") ||
(playerchoice=="PAPER") && computerchoice == "ROCK")
{

    playerscore ++;
    result = `YOU WIN! ${playerchoice} beats ${computerchoice}`

}

else{
    computerscore++;
    result = `YOU LOSE! ${computerchoice} beats ${playerchoice}`
}

    document.getElementById("result").textContent = result;
    document.getElementById("score").textContent =
        `Player: ${playerscore} | Computer: ${computerscore}`;
}

function reset() {
    playerscore = 0;
    computerscore = 0;

    document.getElementById("score").textContent =
        "Player: 0 | Computer: 0";

    document.getElementById("result").textContent =
        "Choose your move!";
}