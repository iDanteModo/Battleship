import { Ship } from './class-Ship.js';
export class Gameboard {
    constructor(id) {
        this.board = Array.from({ length: 10 }, () => {
            return Array(10).fill(0);  // Explicitly return the row
        })
        this.ships = [new Ship(2), new Ship(3), new Ship(4)]
        this.id = id;
        this.attackBoard = Array.from({ length: 10 }, () => {
            return Array(10).fill(0);
        });
        if(this.id === 1) {
            this.attackId = 2;
        }else {
            this.attackId = 1;
        }
        
    };
        
    displayBoard() {
        const boardContainer = document.getElementById(`player${this.id}-board`);
        boardContainer.innerHTML = '';  // Clear the board before rendering
        // Loop through the rows and columns of the board and create cells
        this.board.forEach((row, rowIndex) => {
            row.forEach((cell, colIndex) => {
                const cellElement = document.createElement('div');
                cellElement.classList.add(`cell${this.id}`);
                // Add row and column as data attributes for each cell
                cellElement.dataset.row = rowIndex;
                cellElement.dataset.col = colIndex;
                boardContainer.appendChild(cellElement);
             });
        });
    }

    displayAttackBoard() {
        const attackBoardContainer = document.getElementById(`player${this.id}-attack-board`);
        attackBoardContainer.innerHTML = '';
        this.board.forEach((row, rowIndex) => {
            row.forEach((cell, colIndex) => {
                const cellElement = document.createElement('div');
                cellElement.classList.add(`Acell${this.id}`);
                // Add row and column as data attributes for each cell
                cellElement.dataset.row = rowIndex;
                cellElement.dataset.col = colIndex;
                attackBoardContainer.appendChild(cellElement);
             });
        });
        
    }

    placeShip() {
        const cells = document.querySelectorAll(`.cell${this.id}`);
        let head = false;
        let headCell = []; // Stores the head cell's row and column as [row, col]
        let cellsPlaced = 0; // Tracks the number of ship cells placed
        let i = 0;
        let finish = false;
        
        cells.forEach(cell => {
            cell.addEventListener('click', () => {
                // If the head is not placed yet and we need more cells to complete the ship
                if(i < this.ships.length){
                    if (!head && cellsPlaced < this.ships[i].ship.length && cell.id != 'ship') {
                        head = true; // Mark head as placed
                        cell.dataset.ship = this.ships[i].ship.length; // Assign the head indicator
                        cell.id = 'ship'; // Color the cell to mark as part of the ship
                        headCell = [parseInt(cell.dataset.row), parseInt(cell.dataset.col)]; // Store head cell coordinates
                        cellsPlaced++;
                        console.log(`Head placed at: ${headCell}`);
                    } 
                    // Placing the rest of the ship, ensuring alignment and contiguity
                    else if (head && cellsPlaced < this.ships[i].ship.length) {
                        const currentRow = parseInt(cell.dataset.row);
                        const currentCol = parseInt(cell.dataset.col);
                        
                        // Check if the current cell is aligned either horizontally or vertically with the head cell
                        if ((cell.id != "ship" && currentRow === headCell[0] || currentCol === headCell[1]) &&
                            // Ensure the cell is contiguous with previously placed parts
                            Math.abs(currentRow - headCell[0]) + Math.abs(currentCol - headCell[1]) === cellsPlaced) { // Manhattan path
                            console.log("LEGAL MOVE");
                            console.log(`X is ${currentRow} Y is ${currentCol}`);
                            cell.dataset.ship = this.ships[i].ship.length; 
                            cell.id = 'ship';
                            cellsPlaced++;
                            
                            // Optionally update the head cell coordinates to continue in one direction
                        } else {
                            console.log("ILLEGAL MOVE: Must be in a straight line and contiguous.");
                        }
                    }else if(cellsPlaced >= this.ships[i].ship.length && i < this.ships.length ){
                        // alert("Next Boat");
                        i ++;
                        cellsPlaced =0;
                        headCell =[];
                        head = false;
                    }
                }else if(i === 3) {
                    alert("Ship placement finish ! Click Swap and let the other player start the placements!");
                    finish = true;
                }
                console.log(finish);
            });
        });
        return finish;
    }
    attack() {
        const player1AttackCells = document.querySelectorAll(`.Acell${this.id}`);
        player1AttackCells.forEach(aCell => {
            aCell.addEventListener('click', () => {
                let col = +aCell.dataset.col;
                let row = +aCell.dataset.row;
                const targetCell = document.querySelector(`.cell${this.attackId}[data-row="${row}"][data-col="${col}"]`);
                if(targetCell.id == "ship" && aCell.id != "hit"){
                    console.log("DIRECT HIT")
                    aCell.id = "hit";
                    if(targetCell.dataset.ship == 2){
                        this.ships[0].hit();

                    }else if(targetCell.dataset.ship == 3){
                        this.ships[1].hit();

                    }else if(targetCell.dataset.ship == 4) {
                        this.ships[2].hit();

                    }
                }else if(aCell.id != "hit" && aCell.id != "miss") {
                    aCell.id = 'miss';
                    console.log("MISS")
                }
            this.checkIfAllSunk();
            })
        })
    }
    checkIfAllSunk() {
        let gameOver = 0;
        for(let i = 0; i < 3; i++){
            if(this.ships[i].ship.sunk == true) {
                console.log(this.ships[i].ship.sunk);
                gameOver ++;
            }
        }
        if(gameOver == 3){
            alert(`Game OVER ! Player ${this.id} WON`);
            return true;
        }
        console.log(`GameOver Value: ${gameOver}`);
    }

    sunkMessage() {
        
    }
}

//fix so when you place a ship with length 3 for example you can go forward and back from head , not only 1 direction

// for(let i = 0; i < this.ships.length; i++) {
//     while(this.ships[i].ship.placed === true ){
        
//     }
// }