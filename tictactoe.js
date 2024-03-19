let boxes = document.querySelectorAll(".box");
let resetbt = document.querySelector(".reset");
let newgamebt = document.querySelector("#newgame");
let msgcontainer = document.querySelector("msgcontainer");
let msg = document.querySelector("#msg");

let zerosTurn = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]
let gameover = false;

const resetGame = () => {
    zerosTurn = true;
    gameover = false;
    msgcontainer.classList.add("hide");

};

const showwinner = (winner) => {
    msg.innerHTML = `Congratulations winner is ${winner}`;
    msgcontainer.classList.remove("hide");
};

const checkWinner = () => {
    for (let i = 0; i < winpatterns.length; i++) {
        const condition = winpatterns[i];
        if (
            (boxes[condition[0]].innerHTML === 'X' && boxes[condition[1]].innerHTML === 'X' && boxes[condition[2]].innerHTML === 'X') ||
            (boxes[condition[0]].innerHTML === 'O' && boxes[condition[1]].innerHTML === 'O' && boxes[condition[2]].innerHTML === 'O')
        ) {
            console.log(boxes[condition[2]].innerHTML, "Won")
            gameover = true
            showwinner(boxes[condition[2]]);
        }
    }

}


boxes.forEach(function (box) {
    box.addEventListener("click", function () {

        if (box.innerHTML !== '' || gameover === true) {
            return;
        }
        if (zerosTurn === true) {
            box.innerHTML = 'O'
        } else {
            box.innerHTML = "X"
        }

        zerosTurn = !zerosTurn
        checkWinner();
    })
})
resetbt.addEventListener("click", resetGame);
newgamebt.addEventListener("click", resetGame);






