export class Gameboard {
    constructor(ship, player = ship.player) {
        this.player = ship.player;
        this.ship = ship;
        this.board = Array.from({ length: 10 }, () => {
            return Array(10).fill(0);  // Explicitly return the row
        })
        this.shipLength = ship.length; 
    };
        
    displayBoard() {
        const boardContainer = document.getElementById(`player${this.player}-board`);
        boardContainer.innerHTML = '';  // Clear the board before rendering
        // Loop through the rows and columns of the board and create cells
        this.board.forEach((row, rowIndex) => {
            row.forEach((cell, colIndex) => {
                const cellElement = document.createElement('div');
                cellElement.classList.add('cell');
                // Add row and column as data attributes for each cell
                cellElement.dataset.row = rowIndex;
                cellElement.dataset.col = colIndex;
                boardContainer.appendChild(cellElement);
             });
        });
    }

    placeShip() {
        const cells = document.querySelectorAll('.cell');
        let head = false;
        let headCell = []; // Stores the head cell's row and column as [row, col]
        let cellsPlaced = 0; // Tracks the number of ship cells placed
        
        cells.forEach(cell => {
            cell.addEventListener('click', () => {
                // If the head is not placed yet and we need more cells to complete the ship
                if (!head && cellsPlaced < this.shipLength) {
                    head = true; // Mark head as placed
                    cell.dataset.ship = this.ship.length; // Assign the head indicator
                    cell.id = 'ship'; // Color the cell to mark as part of the ship
                    headCell = [parseInt(cell.dataset.row), parseInt(cell.dataset.col)]; // Store head cell coordinates
                    cellsPlaced++;
                    console.log(`Head placed at: ${headCell}`);
                } 
                // Placing the rest of the ship, ensuring alignment and contiguity
                else if (head && cellsPlaced < this.shipLength) {
                    const currentRow = parseInt(cell.dataset.row);
                    const currentCol = parseInt(cell.dataset.col);
                    
                    // Check if the current cell is aligned either horizontally or vertically with the head cell
                    if ((currentRow === headCell[0] || currentCol === headCell[1]) &&
                        // Ensure the cell is contiguous with previously placed parts
                        Math.abs(currentRow - headCell[0]) + Math.abs(currentCol - headCell[1]) === cellsPlaced) { // Manhattan path
    
                        console.log("LEGAL MOVE");
                        console.log(`X is ${currentRow} Y is ${currentCol}`);
                        cell.id = 'ship';
                        cellsPlaced++;
                        
                        // Optionally update the head cell coordinates to continue in one direction
                    } else {
                        console.log("ILLEGAL MOVE: Must be in a straight line and contiguous.");
                    }
                }
    
                // If ship placement is complete
                if (cellsPlaced === this.shipLength) {
                    console.log("Ship placement complete!");
                }
            });
        });
    }
    receiveAttack() {

    }

    sunkMessage() {
        if(this.ship.sunk === true) {
            console.log(`${this.ship.player}'s ship has been sunk ! `)
        }
    }
}




