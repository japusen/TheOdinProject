function Gameboard() {
    const board = Array(9).fill(0);

    const getBoard = () => board;

    const isBoardFull = () => !board.includes(0);

    const isFreeSpace = (index) => (board[index] === 0) ? true : false;

    const isWinRows = (marker) => {
        const row1 = board.slice(0, 3);
        const row2 = board.slice(3, 6);
        const row3 = board.slice(6);

        return row1.every(value => value === marker) 
            || row2.every(value => value === marker)
            || row3.every(value => value === marker)
    }

    const isWinColumns = (marker) => {
        const col1 = [board[0], board[3], board[6]];
        const col2 = [board[1], board[4], board[7]];
        const col3 = [board[2], board[5], board[8]];

        return col1.every(value => value === marker) 
            || col2.every(value => value === marker)
            || col3.every(value => value === marker)
    }

    const isWinDiagonals = (marker) => {
        const diag1 = [board[0], board[4], board[8]];
        const diag2 = [board[6], board[4], board[2]];

        return diag1.every(value => value === marker) 
            || diag2.every(value => value === marker)
    }

    const isGameWon = (marker) => {
        return isWinColumns(marker)
            || isWinRows(marker)
            || isWinDiagonals(marker);
    }

    const placeMarker = (index, marker) => {
        if (board[index] === 0) {
            board[index] = marker;
        }
    }

    const printBoard = () => {
        console.log("Board:");
        console.log(`${board[0]} ${board[1]} ${board[2]}`);
        console.log(`${board[3]} ${board[4]} ${board[5]}`);
        console.log(`${board[6]} ${board[7]} ${board[8]}`);
    }

    return {
        getBoard,
        isBoardFull,
        isFreeSpace,
        isGameWon,
        placeMarker,
        printBoard
    }
}

function GameController(
    playerOne = "Player One",
    playerTwo = "Player Two"
) {
    const board = Gameboard();

    const isGameOver = () => board.isGameWon(players[0].marker) || board.isGameWon(players[1].marker);
    
    const isDraw = () => board.isBoardFull();
    
    const players = [
        {
            name: playerOne,
            marker: 'X'
        },
        {
            name: playerTwo,
            marker: 'O'
        }
    ];

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = (activePlayer === players[0]) ? players[1] : players[0];
    };

    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn.`);
    };

    const playRound = (index) => {
        if (!isGameOver() && board.isFreeSpace(index)) {
            console.log(
                `${activePlayer.name} placing ${activePlayer.marker} into ${index}...`
            );
            board.placeMarker(index, getActivePlayer().marker);

            if (board.isGameWon(activePlayer.marker)) {
                console.log(`${activePlayer.name} wins!`);
            } else {
                switchPlayerTurn();
                printNewRound();
            }
        }
    };

    printNewRound();

    return {
        playRound,
        isGameOver,
        isDraw,
        getActivePlayer,
        getBoard: board.getBoard
    }
}

function ScreenController() {
    const game = GameController();
    const playerTurnDiv = document.querySelector('.turn');
    const boardDiv = document.querySelector('.board');
  
    const updateScreen = () => {
      // clear the board
      boardDiv.textContent = "";
  
      // get the newest version of the board and player turn
      const board = game.getBoard();
      const activePlayer = game.getActivePlayer();
  
      // Display player's turn
      if (game.isGameOver()) {
        playerTurnDiv.textContent = `${game.getActivePlayer().name} Wins!`;
      } else if (game.isDraw()) {
        playerTurnDiv.textContent = `Draw!`
      } else {
        playerTurnDiv.textContent = `${activePlayer.name}'s turn...`
      }
      
      // Render board squares
      board.forEach( (value, index) => {
        const cellButton = document.createElement("button");
          // Create a data attribute to identify the index
          // This makes it easier to pass into our `playRound` function 
          cellButton.dataset.index = index
          cellButton.textContent = (value !== 0) ? value : '';
          boardDiv.appendChild(cellButton);
      })
    }
  
    // Add event listener for the board
    function clickHandlerBoard(e) {
      const selectedIndex = e.target.dataset.index;
      // Make sure I've clicked a column and not the gaps in between
      if (!selectedIndex) return;
      
      game.playRound(selectedIndex);        
      updateScreen();
    }

    boardDiv.addEventListener("click", clickHandlerBoard);
  
    // Initial render
    updateScreen();
  
    // We don't need to return anything from this module because everything is encapsulated inside this screen controller.
  }
  
  ScreenController();