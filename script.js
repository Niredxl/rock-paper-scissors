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

function getHumanChoice(){
    let user_choice = prompt("enter your choice: \n rock \n paper \n scisssors");
    return user_choice;
}

function play_round(computer_choice, user_choice){
    computer_choice = computer_choice.toLowerCase();
    user_choice = user_choice.toLowerCase();
    console.log(computer_choice + user_choice);

    let winner = 0;

    if (computer_choice.localeCompare(user_choice) === 0){
            winner = 0;
    }
    // user picks rock
    else if ("rock".localeCompare(user_choice) === 0){

        if ("paper".localeCompare(computer_choice) === 0){
            console.log("f");
            winner = 2;
        }
        else if ("scissors".localeCompare(computer_choice) === 0){
            console.log("f");
            winner = 1;
        }
    }
    // user picks paper
    else if ("paper".localeCompare(user_choice) == 0){
        if ("scissors".localeCompare(computer_choice) == 0){
            winner = 2;
        }
        else if ("rock".localeCompare(computer_choice) == 0){
            winner = 1;
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
            console.log("Its a draw.")
            break;
        case 1:
            humanScore++;
            console.log(user_choice + " beats " + computer_choice + ", you win.")
            break;
        case 2:
            computerScore++; 
            console.log(user_choice + " beats " + computer_choice + ", you win.")
            break;
    }
}
    
let x = (getHumanChoice());
let y = (getComputerChoice());

play_round(y,x);