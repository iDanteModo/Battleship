export class Gameboard {
    constructor(ship, player = ship.player) {
        this.player = ship.player;
        this.ship = ship;
        this.board = Array.from({ length: 10 }, () => {
            return Array(10).fill(0);  // Explicitly return the row
        })};

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
        let headCell =[];
        let shipPlacementRemaining = 0 - this.ship.length;
        cells.forEach(cell => {
            cell.addEventListener('click',() => {
                if(!head && shipPlacementRemaining < 0) {   // Starting point of the ship
                    head = true;   // We recognize head of ship has been placed
                    cell.dataset.ship = this.ship.length;  // we make a copy from the head coordinates so we can calculate if placement is legal
                    cell.id = 'ship'; // we color the square to know its our ship 
                    // we push the values of the coordinates in our headcell array
                    headCell.push(cell.dataset.row); 
                    headCell.push(cell.dataset.col);
                    console.log(headCell);
                    shipPlacementRemaining ++;
                }else if(head = true && shipPlacementRemaining < 0) { // the head has been placed and ship not completed
                        if(cell.dataset.row == headCell[0] || cell.dataset.col == headCell[1]){
                            console.log("LEGAL MOVE");
                            cell.id = 'ship';
                            shipPlacementRemaining ++;
                            console.log(shipPlacementRemaining);
                        }
                }
            })
        })
    }
    receiveAttack() {

    }

    sunkMessage() {
        if(this.ship.sunk === true) {
            console.log(`${this.ship.player}'s ship has been sunk ! `)
        }
    }
}




