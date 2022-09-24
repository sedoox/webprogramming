function rockPaperScissors(player1, player2) {
    player1.toLowerCase()
    player2.toLowerCase()
    if(checkInvalidMove(player1) && checkInvalidMove(player2)) {
        console.log("Invalid moves of " + player1 + " and " + player2 + "!")
        return
    } else if (checkInvalidMove(player1)) {
        console.log("Invalid move of " + player1 + "!")
        return
    } else if (checkInvalidMove(player2)) {
        console.log("Invalid move of " + player2 + "!")
        return
    }

    if (player1 == player2) {
        console.log("tie")
        return
    }

    if (player1 == "rock" && player2 == "paper" || player1 == "paper" && player2 == "scissors" || player1 == "scissors" && player2 == "rock") {
        console.log("PLayer 2 won")
    } else {
        console.log("PLayer 1 won")
    }
}

function checkInvalidMove(move) {
    return move == "rock" || move == "paper" || move == "scissors";
}