// rock paper scissors

const getComputerChoice = () => {
    let result = Math.floor(Math.random() * 3)
    switch (result) {
        case 0:
            result = "Rock";
            break;
        case 1:
            result = "Paper";
            break;
        case 2:
            result = "Scissors"
            break;
    }
    return result
}

const checkAnswer = (playerChoice) => {
    playerChoice = playerChoice.toLowerCase()
    return (
        playerChoice == "rock" ||
        playerChoice == "scissors" ||
        playerChoice == "paper") ? true : false;
}

const playRound = (playerChoice) => {
    if (checkAnswer(playerChoice)) {
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();

        const computerChoice = getComputerChoice()

        let result = (playerChoice == computerChoice) ? `${playerChoice} == ${computerChoice}. No one win.` :
            (playerChoice == "Rock" && computerChoice == "Scissors" ||
                playerChoice == "Scissors" && computerChoice == "Paper" ||
                playerChoice == "Paper" && computerChoice == "Rock") ? `You win! ${playerChoice} beats ${computerChoice}` :
                `You lose!${computerChoice} beats ${playerChoice}`;

        return result
    } else {
        return "You wrote smt wrong. Repeat"
    }
}

const startPlay = () => {
    alert('You will have 5 rounds! Let\'s start!')
    for (let i = 0; i <= 5; i++) {
        let playerAnswer = prompt("Write rock || paper || scissors")
        console.log(playRound(playerAnswer))
    }
}


