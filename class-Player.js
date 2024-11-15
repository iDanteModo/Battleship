import { Gameboard } from './class-gameboard.js';
export class Player {
    constructor() {
        this.player = {
            name: "",
            gameboard: new Gameboard(),
            won: false,
        }
        }
}
