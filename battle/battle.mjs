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

        this.field.placeShip(ship1, ['A:1', 'A:4']);
        this.field.placeShip(ship2, ['B:3', 'C:3']);

        console.log('ships placed on the field.');
    }

    attack(coordsCollection, gun) {

        coordsCollection.forEach((coords) => {
            const cell = this.field.getCell(coords);

            cell.block.hit(gun);

            if (Field.hasShip(cell)) {
                console.log(`${cell.id} - hit!`);
            } else {
                console.log(`${cell.id} - miss.`);
            }
        });
    }

    start() {
        console.log('Battle has begun!');

        console.log('Show field: ');
        this.field.display();

        console.log('attack: ');
        this.attack(['A:2'], 'Machine Gun');
        this.attack(['A:6'], 'Rocket');
    }
}