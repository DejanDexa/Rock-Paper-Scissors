const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    //Game Start
    const startGame = () => {
        const playBtn = document.querySelector(".start button");
        const startScreen = document.querySelector(".start");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            startScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        //Computer options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function() {
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions [computerNumber];
                //Call compare hands
            });
        });
    };

    const compareHands = (playerChoice, computerChoice) => {
        //Update Text
        const winner = document.querySelector(".winner");
        //Check if it's tie
        if (playerChoice === computerChoice) {
            winner.textContent = "Tie";
            return;
        }
        //Check if it's rock
        if(playerChoice === "rock") {
            if(computerChoice === "scissors") {
                winner.textContent = "You Win"
                return;
            } else {
                winner.textContent = "Computer Wins"
                return;
            }
        }
        //Check if it's paper
        if(playerChoice === "paper") {
            if(computerChoice === "scissors") {
                winner.textContent = "Computer Wins"
                return;
            } else {
                winner.textContent = "You Win"
                return;
            }
        }
        //Check if it's scissors
        if(playerChoice === "scissors") {
            if(computerChoice === "rock") {
                winner.textContent = "Computer Wins"
                return;
            } else {
                winner.textContent = "You Win"
                return;
            }
        }

    }

    //Call inner functions
    startGame();
    playMatch()
};

//start the game function
game();