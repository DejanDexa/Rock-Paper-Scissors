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
            });
        });
    };

    //Call inner functions
    startGame();
    playMatch()
};

//start the game function
game();