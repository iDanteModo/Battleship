export class Ship {
    constructor(length, player, name) {
        this.ship = {
            player: player,
            name: name,
            length: length,
            hit: 0,
            sunk: false
        }
    }

    hit() {
        this.ship.hit ++;
        this.sunk();
    }

    sunk() {
        if(this.ship.hit === this.ship.length) {
            this.ship.sunk = true;
        }
    }


}

const shipLength2 = new Ship(2, 1, 'Razvan');
shipLength2.hit();
shipLength2.hit();
shipLength2

