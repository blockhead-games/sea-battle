'use strict';

import {Field} from '../field';
import {Ship} from '../ship';

export default class Battle {
    constructor() {
        this.field = new Field();
        let ship = new Ship();
        
        this.field.addShip('A3', Field.DIRECTION_BOTTOM, ship);
    }

    start() {
        console.log('Battle has begun!');
    }

    attack(coord, gun) {
        if (this.field.hasShip(coord)) {
            // hit!
        } else {
            // miss.
        }
    }
}