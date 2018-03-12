'use strict';

import {Field} from '../field'
import {Ship} from "../ship/index.mjs";

import ship1_data from './ships-data/2-deck'
import ship2_data from './ships-data/4-deck'

export default class Player {
    constructor(uid) {
        this.uid = uid;

        console.log(`[Player ${this.uid}] has joined.`);

        this.field = new Field();
        console.log(`[Player ${this.uid}] >> field created.`);

        const ship1 = new Ship(ship1_data);
        const ship2 = new Ship(ship2_data);

        console.log(`[Player ${this.uid}] >> ships created.`);

        this.field.placeShip(ship1, ['A:1', 'A:4']);
        this.field.placeShip(ship2, ['B:3', 'C:3']);

        console.log(`[Player ${this.uid}] >> ships placed on the field.`);
    }
}