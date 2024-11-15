import { Player } from './class-Player.js'


function play(){
    const player1 = new Player(1);
    const player2 = new Player(2);
    player1.player.name = "dante";
    player2.player.name = 'modo';
    console.log(player1);
    console.log(player2);
    player1.player.gameboard.displayBoard();
    player1.player.gameboard.placeShip();
    player2.player.gameboard.displayBoard(); 
    player2.player.gameboard.placeShip();
}

play();

