let turn = "x";
let symbols = [["", "", ""], ["", "", ""], ["", "", ""]];

const board = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile"));

board.addEventListener("click", ({ target }) => {
  const classes = Array.from(target.classList);
  if (classes.includes("tile") && classes.length !== 1) return;

  const idx = tiles.indexOf(target);

  target.classList.add(`tile-${turn}`);
  symbols[idx % 3][Math.floor(idx / 3)] = turn;
  turn = turn === "x" ? "o" : "x";

  displayTurn(turn);

  checkWin();
});

function displayTurn(turn) {
  // 1. zmień text elementu h1 z klasą "turn" zależnie od tego, czyja jest aktualnie tura
  document.querySelector(".turn").innerHTML = turn.toUpperCase() + " turn";
}

function checkWin() {
  // 2. sprawdź czy któryś z graczy wygrał pojedynek - jeśli tak wyświetla komunikat (możesz użyć np. funkcji "alert(...)")
  // troszkę łopatologicznie
  if ((symbols[0][0] == "x" && symbols[0][1] == "x" && symbols[0][2] == "x") || (symbols[1][0] == "x" && symbols[1][1] == "x" && symbols[1][2] == "x") || (symbols[2][0] == "x" && symbols[2][1] == "x" && symbols[2][2] == "x") || (symbols[0][0] == "x" && symbols[1][0 == "x"] && symbols[2][0] == "x")|| (symbols[0][1] == "x" && symbols[1][1] == "x" && symbols[2][1] == "x")|| (symbols[0][2] == "x" && symbols[1][2] == "x" && symbols[2][2] == "x") || (symbols[0][0] == "x" && symbols[1][1] == "x" && symbols[2][2] == "x")|| (symbols[0][2] == "x" && symbols[1][1] == "x" && symbols[2][0] == "x")) {
    
    setTimeout(function() {
      alert("X won!");
      reset();
    }, 0);

  } else if ((symbols[0][0] == "o" && symbols[0][1] == "o" && symbols[0][2] == "o") || (symbols[1][0] == "o" && symbols[1][1] == "o" && symbols[1][2] == "o") || (symbols[2][0] == "o" && symbols[2][1] == "o" && symbols[2][2] == "o") || (symbols[0][0] == "o" && symbols[1][0] == "o" && symbols[2][0] == "o")|| (symbols[0][1] == "o" && symbols[1][1] == "o" && symbols[2][1] == "o")|| (symbols[0][2] == "o" && symbols[1][2] == "o" && symbols[2][2] == "o") || (symbols[0][0] == "o" && symbols[1][1] == "o" && symbols[2][2] == "o")|| (symbols[0][2] == "o" && symbols[1][1] == "o" && symbols[2][0] == "o")) {
    
    setTimeout(function() {
      alert("O won!");
      reset();
    }, 0);

  }
}

// 3. dodaj listener pod przycisk z napisaem "reset" tak, aby po jego kliknięciu wywołać funkcję reset
document.querySelector(".reset").addEventListener("click", reset);

function reset() {
  // 4. zresetuj stan gry
  symbols = [["", "", ""], ["", "", ""], ["", "", ""]];
  let placed = document.querySelectorAll(".tile-x, .tile-o");
  for (var i = 0; i < placed.length; i++) {
    placed[i].className = "tile";
  }
}
