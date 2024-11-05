function rollDice() {
    const diceNumber = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dicerolled-Number").innerText = diceNumber;
}

document.getElementById("rollDice").addEventListener("click", rollDice);
