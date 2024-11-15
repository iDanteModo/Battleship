import { Player } from './class-Player.js'





const player1 = new Player();
const player2 = new Player();

console.log(player1);
console.log(player2);

player1.player.gameboard.displayBoard();
player1.player.gameboard.placeShip();
console.log(player1.player.gameboard.ships[0].ship.length);

