const button = document.getElementById('button');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');

export function swapPlayers() {
    let i = 0;
    button.addEventListener('click', () => {
        if(i % 2 === 0){ // player1
            player1.style.display = "none";
            player2.style.display = "";
            i++;
        }else if( i % 2 != 0) { // player2
            player1.style.display = "";
            player2.style.display = "none";
            i++;

        } 
    })
}