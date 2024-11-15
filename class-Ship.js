export class Ship {
    constructor(length) {
        this.ship = {
            length: length,
            hit: 0,
            placed: false,
            sunk: false
        }
    }

    hit() {
        this.ship.hit ++;
        this.sunk();
        console.log("HIT");
    }

    sunk() {
        if(this.ship.hit === this.ship.length){
            this.ship.sunk = true;
            // console.log("TRUE TRUE");
        }
    }


}

// const shipLength2 = new Ship(2, 1, 'Razvan');
// shipLength2.hit();
// shipLength2.hit();
// shipLength2
// console.log(shipLength2.ship.sunk)


