import { Player } from './class-Player.js'
import { swapPlayers } from './swap.js';


function play(){
    const player1 = new Player(1);
    const player2 = new Player(2);
    swapPlayers();
    player1.player.name = "dante";
    player2.player.name = 'modo';
    console.log(player1);
    console.log(player2);
    player1.player.gameboard.displayBoard();
    player2.player.gameboard.displayBoard();
    player1.player.gameboard.displayAttackBoard();
    player2.player.gameboard.displayAttackBoard(); 
    player1.player.gameboard.placeShip();
    player2.player.gameboard.placeShip();
    player1.player.gameboard.attack();
    player2.player.gameboard.attack();
}

play();

