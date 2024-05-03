let rock = "🪨";
let paper = "📄";
let scissors = "✂️";
let rpsObjects = [rock, paper, scissors];
let numWins = 0; 
let numTies = 0; 
let numLoses = 0;


function getRPSResult(player, cpu){
    rpsPlayText.innerHTML = "Click to Play Again:";
    if (player == cpu) return "tie";
    switch(player){
        case rock:
            if (cpu == scissors) return "win";
            if (cpu == paper) return "lose";
            break;
        case paper:
            if (cpu == rock) return "win";
            if (cpu == scissors) return "lose";
            break;
        case scissors:
            if (cpu == paper) return "win";
            if (cpu == rock) return "lose";
            break;
    }
    return "not implemented";
}    

function rpsPlay(player) {
    let cpuPick = rpsObjects[Math.floor(Math.random() * rpsObjects.length)];
    
    rpsResultsBox.innerHTML = "You played " + player + " vs. " + cpuPick;
    let result = getRPSResult(player, cpuPick);
    rpsGameResultsBox.innerHTML = "This is a  " + result;

    processResult(result);
}

function processResult(result){
    switch(result){
        case "win":
            numWins++;
            break;
        case "lose":
            numLoses++;
            break;
        case "tie":
            numTies++;
            break;
    }
    rpsStatsBox.innerHTML = "Wins: " + numWins + " / Losses: " + numLoses + " / Ties: " + numTies;
}

document.addEventListener("DOMContentLoaded", function(event){
    rpsRockButton.addEventListener("click", (e) => {rpsPlay(rock)});
    rpsPaperButton.addEventListener("click", (e) => {rpsPlay(paper)});
    rpsScissorsButton.addEventListener("click", (e) => {rpsPlay(scissors)});
});