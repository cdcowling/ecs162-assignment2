"use strict";
document.addEventListener("DOMContentLoaded", function(event){
    let diceImage = document.getElementById("diceDisplayed");
    let button = document.getElementById("rollDiceButton");
    let resultText = document.getElementById("diceResult");

    async function rollDice() {
        diceImage.src = 'games-media/dice-media/dice-six-faces-one.png'
        await new Promise(r => setTimeout(r, 100));
        diceImage.src = 'games-media/dice-media/dice-six-faces-three.png'
        await new Promise(r => setTimeout(r, 100));
        diceImage.src = 'games-media/dice-media/dice-six-faces-six.png'
        await new Promise(r => setTimeout(r, 100));
        diceImage.src = 'games-media/dice-media/dice-six-faces-five.png'
        await new Promise(r => setTimeout(r, 100));
        diceImage.src = 'games-media/dice-media/dice-six-faces-two.png'

        var diceResult = Math.floor(Math.random() * 6) + 1;
        switch (diceResult) {
            case 1:
                diceImage.src = 'games-media/dice-media/dice-six-faces-one.png';
                break;
            case 2:
                diceImage.src = 'games-media/dice-media/dice-six-faces-two.png';
                break;
            case 3:
                diceImage.src = 'games-media/dice-media/dice-six-faces-three.png';
                break;
            case 4:
                diceImage.src = 'games-media/dice-media/dice-six-faces-four.png';
                break;
            case 5:
                diceImage.src = 'games-media/dice-media/dice-six-faces-five.png';
                break;
            case 6:
                diceImage.src = 'games-media/dice-media/dice-six-faces-six.png';
                break;
            default:
                break;
        }
        resultText.innerHTML = "Result: " + diceResult;
    }

    button.addEventListener("click", rollDice);
});