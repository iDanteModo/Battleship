import { Gameboard } from './class-gameboard.js';
export class Player {
    constructor(id) {
        this.player = {
            id : id,
            name: "",
            gameboard: new Gameboard(id),
            won: false,
        }
        }
}
