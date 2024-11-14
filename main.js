import { Ship } from './class-Ship.js';
import { Gameboard } from './class-gameboard.js';


// Function to display the board on the webpage


const shipLength2 = new Ship(2);
shipLength2.hit();
shipLength2.hit();


let ship = {
    player: 1,
    name: 'Razvan',
    length: 3,
    hit: 2,
    sunk: false
}

let test = new Gameboard(ship);
test.displayBoard();
test.placeShip();
console.log(test);
