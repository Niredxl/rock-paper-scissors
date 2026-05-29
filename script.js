console.log("Hello World");

let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    let x = Math.floor(Math.random() * 3);
    switch(x){
        case 0:
             return "rock";
             break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }

}

function play_round(computer_choice, user_choice){
    const prompt = document.querySelector("#prompt");
    const result = document.querySelector("#result");
    result_text = "";
    prompt.textContent = "You picked " +  user_choice + " Computer picked " + computer_choice; 

    computer_choice = computer_choice.toLowerCase();
    user_choice = user_choice.toLowerCase();

    let winner = 0;

    if (computer_choice.localeCompare(user_choice) === 0){
            winner = 0;
    }
    // user picks rock
    else if ("rock".localeCompare(user_choice) === 0){

        if ("paper".localeCompare(computer_choice) === 0){
            winner = 2;
        }
        else if ("scissors".localeCompare(computer_choice) === 0){
            winner = 1;
        }
    }
    // user picks paper
    else if ("paper".localeCompare(user_choice) == 0){
        if ("scissors".localeCompare(computer_choice) == 0){
            winner = 2;
        }
        else if ("rock".localeCompare(computer_choice) == 0){
            winner = 1 ;
        }
    }
    // user picks scissors
    else if ("scissors".localeCompare(user_choice) == 0){

        if ("rock".localeCompare(computer_choice) == 0){
            winner = 2;
        }
        else if ("paper".localeCompare(computer_choice) == 0){
            winner = 1;
        }
    }

    switch (winner){
        case 0:
            result_text = ("Its a draw.")
            break;
        case 1:
            humanScore++;
            result_text = (user_choice + " beats " + computer_choice + ", you win.")
            break;
        case 2:
            computerScore++; 
            result_text = (computer_choice + " beats " + user_choice + ", computer wins.")
            break;
    }
    result.textContent = result_text;
}

function update_score(){
    const score = document.querySelector("#score");
    score.textContent = "User Score : " + humanScore + "\t Computer Score: " + computerScore;
    
}
function winner_check(){
    const score = document.querySelector("#prompt");
    const winner = document.createElement("div");
    winner.classList.add("winner");
    
    if (humanScore >= 5){
        winner.textContent = "YOU WIN!!"
        score.appendChild(winner);
        humanScore = 0; 
        computerScore = 0;
        update_score();
    }
    else if (computerScore >= 5){
        winner.textContent = "COMPUTER WINS"
        score.appendChild(winner);
        update_score();
        humanScore = 0; 
        computerScore = 0;
        update_score();
    }
    else{
        return
    }
}

function playGame(){
    const options = document.querySelector("#options");
    options.addEventListener('click', (event) => {
        const isButton = event.target.nodeName  === 'BUTTON';
        if (!isButton){
            return;
        }
        let user_choice = event.target.id;
        let computer_choice = getComputerChoice();
        play_round(computer_choice, user_choice);
        update_score();
        winner_check();

        
    })
    
    
}

playGame();