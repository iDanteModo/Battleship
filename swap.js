const button = document.getElementById('button');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');

export function swapPlayers() {
    let i = 1;
    let isChanging = false;  // To prevent the immediate toggle before the timeout finishes

    button.addEventListener('click', () => {
        if (isChanging) return;  // Prevent another click until the change is done

        isChanging = true;  // Set the flag to true indicating a change is happening
        
        if (i % 2 === 0) { // player1
            player1.style.display = "none";
            setTimeout(function() {
                player2.style.display = "";  // Show player2
                isChanging = false;  // Allow another click after 3 seconds
            }, 3000);
            i++;  // Increment i to toggle the state for the next click
        } else { // player2
            player2.style.display = "none";
            setTimeout(function() {
                player1.style.display = "";  // Show player1
                isChanging = false;  // Allow another click after 3 seconds
            }, 3000);
            i++;  // Increment i to toggle the state for the next click
        }
    });
}