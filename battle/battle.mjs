'use strict';

import {Field} from '../field';
import {Ship} from '../ship';

// > create field
// > create ships
// > placeShips - link the field cells with the ships
export default class Battle {
    constructor() {

        this.field = new Field();
        console.log('field created.');

        const ship = new Ship();
        console.log('ship created.');

        this.field.placeShip(ship, ['A-1', 'A-4']);
        console.log('ship placed to the field.');
    }

    start() {
        console.log('Battle has begun!');
        console.log('Show field: ');
        console.log(JSON.stringify(this.field));
    }
}