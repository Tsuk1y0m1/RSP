// rock paper scissors
const btnStart = document.querySelector(".start")
const player = document.querySelector(".player")
const computer = document.querySelector(".computer")
const choices = document.querySelectorAll(".choice")


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



const playRound = (playerChoice) => {
    let computerChoice = getComputerChoice()
    let result = (playerChoice == computerChoice) ? [0, 0] :
            (playerChoice == "Rock" && computerChoice == "Scissors" ||
                playerChoice == "Scissors" && computerChoice == "Paper" ||
                playerChoice == "Paper" && computerChoice == "Rock") ? [1, 0] :
                [0, 1];

        return result
}

const gamePlay = (e) => {
        const playerChoice = e.target.alt
        if (!playerChoice) return
        let result = playRound(playerChoice)
        let count = [player.textContent, computer.textContent]
        count[0] = +count.at(0) + result.at(0)
        count[1] = +count.at(1) + result.at(1)
        player.textContent = count.at(0)
        computer.textContent = count.at(1)
        if (count[0] == 5) {
            alert('You win!')
            startPlayBtn()   
        } else if (count[1] == 5){
            alert('Bob win!')
            startPlayBtn()   
        }
        
    }
const startPlayBtn = () => {
    player.textContent = "0"
    computer.textContent = "0"
}
choices.forEach(choice => choice.addEventListener('click', gamePlay))
btnStart.addEventListener('click', startPlayBtn)
