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

        const ship1 = new Ship();
        const ship2 = new Ship();

        console.log('ships created.');

        this.field.placeShip(ship1, ['A-1', 'A-4']);
        this.field.placeShip(ship2, ['B-3', 'C-3']);

        console.log('ships placed on the field.');
    }

    attack(coordsCollection, gun) {

        coordsCollection.forEach((coords) => {
            let cell = this.field.getCell(coords);
            console.log(cell);
        });

        // cells.forEach((cell, i) => {
        //     cell.block = ship.blocks[i];
        // });

        // console.log(this.grid.A[1]);

        /*if (this.hasShip(coords)) {
            // hit!
        } else {
            // miss.
        }*/
    }

    start() {
        console.log('Battle has begun!');

        console.log('Show field: ');
        this.field.display();

        console.log('attack: ');
        this.attack(['A-2']);
    }
}