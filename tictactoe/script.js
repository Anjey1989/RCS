const cells = document.querySelectorAll("td");
console.log(cells);

var numberOfGoes = 0;

cells.forEach(cells => cells.addEventListener("click", clicked));

var player = "X";

var player1 = "";
var player2 = "";

function nextPlayer() {
    if (player === "X") {
        player = "O"
    } else {
        player = "X"
    }
}

function clicked() {
    // console.log(this);
    numberOfGoes++;
    this.innerText = player;
    this.removeEventListener("click", clicked);
    playerClicked(player, this.id);
    // console.log(player1);
    // console.log(player2);
    nextPlayer();
    checkWinner();

}

function playerClicked(player, cell) {
    if (player === "X") {
        player1 = player1 + cell;
        player1 = player1.split('').sort().join('');
    }
    else {
        player2 = player2 + cell;
        player2 = player2.split('').sort().join('');

    }
}

function checkWinner() {
    winners.forEach(win => {
        if (player1.includes(win)) {
            alert("player 1 won");
        }
         else if (player2.includes(win)) {
            alert("player 2 won");
        }
        else if (numberOfGoes==9) {
                alert("game over");
                location.reload();
        }
        
    })
}

const winners = [
    "012",
    "345",
    "678",
    "036",
    "147",
    "268",
    "048",
    "246"
]

console.log(winners);

