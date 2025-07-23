function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
      page.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
  }
  
  // Tic Tac Toe logic
  let board = ["", "", "", "", "", "", "", "", ""];
  let currentPlayer = "X";
  let gameActive = true;
  
  const statusDisplay = document.getElementById("status");
  
  function makeMove(index) {
    if (board[index] !== "" || !gameActive) return;
    board[index] = currentPlayer;
    document.querySelectorAll('.cell')[index].textContent = currentPlayer;
    if (checkWinner()) {
      statusDisplay.textContent = `${currentPlayer} wins!`;
      gameActive = false;
      return;
    }
    if (!board.includes("")) {
      statusDisplay.textContent = "It's a draw!";
      gameActive = false;
      return;
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
  
  function checkWinner() {
    const winConditions = [
      [0,1,2], [3,4,5], [6,7,8], // rows
      [0,3,6], [1,4,7], [2,5,8], // columns
      [0,4,8], [2,4,6]           // diagonals
    ];
    return winConditions.some(condition => {
      const [a, b, c] = condition;
      return board[a] && board[a] === board[b] && board[a] === board[c];
    });
  }
  
  function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = "");
    statusDisplay.textContent = "";
  }