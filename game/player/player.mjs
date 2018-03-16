'use strict';

import {Field} from '../field'

import ship2_data from './ships-data/2-deck'
import ship4_data from './ships-data/4-deck'

export default class Player {
    constructor(uid) {
        this.uid = uid;

        console.log(`[Player ${this.uid}] has joined.`);

        this.field = new Field();
        console.log(`[Player ${this.uid}] >> field created.`);

        console.log(`[Player ${this.uid}] >> ships created.`);
        this.field.placeShip(ship2_data, ['C:3', 'D:3']);
        this.field.placeShip(ship4_data, ['A:1', 'A:4']);

        console.log(`[Player ${this.uid}] >> ships placed on the field.`);
    }

    get availableWeapons() {
        return this.field.ships.map(ship => ship.weapons).reduce((a, b) => a.concat(b), []);
    }
}