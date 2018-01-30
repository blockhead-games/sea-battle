'use strict';

import {Field} from '../field';

export default class Battle {
    constructor() {
        this.field = new Field();
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