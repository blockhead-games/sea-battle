'use strict';

import {Field} from '../field'
import {Ship} from '../ship/index';

import ship2_data from './ships-data/2-deck'
import ship4_data from './ships-data/4-deck'

export default class Player {
    constructor(uid) {
        this.uid = uid;

        console.log(`[Player ${this.uid}] has joined.`);

        this.field = new Field();
        console.log(`[Player ${this.uid}] >> field created.`);

        const ship2 = new Ship(ship2_data);
        const ship4 = new Ship(ship4_data);

        this.ships = [ship2, ship4];

        console.log(`[Player ${this.uid}] >> ships created.`);
        this.field.placeShip(ship4, ['A:1', 'A:4']);
        this.field.placeShip(ship2, ['C:3', 'D:3']);

        console.log(`[Player ${this.uid}] >> ships placed on the field.`);
    }

    get availableWeapons() {
        return this.ships.map(ship => ship.weapons).reduce((a, b) => a.concat(b), []);
    }
}