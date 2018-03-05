'use strict';

import {Field} from '../field';
import {Ship} from '../ship';
import {Player} from '../player'

const ship1_data = {
    name: "Ship 4-deck",
    blocks: [
        {perk: "Rocket"},
        {perk: "Rocket"},
        {perk: "Rocket"},
        {perk: "Rocket"}
    ]
};

const ship2_data = {
    name: "Ship 2-deck",
    blocks: [
        {perk: "Rocket"},
        {perk: "Rocket"}
    ]
};

// > create field
// > create ships
// > placeShips - link the field cells with the ships
export default class Battle {
    constructor() {

        this.teamA = null;
        this.teamB = null;

        this.field = new Field();
        console.log('field created.');

        const ship1 = new Ship(ship1_data);
        const ship2 = new Ship(ship2_data);

        console.log('ships created.');

        this.field.placeShip(ship1, ['A:1', 'A:4']);
        this.field.placeShip(ship2, ['B:3', 'C:3']);

        console.log('ships placed on the field.');
    }

    attack(attacksList) {

        attacksList.forEach(({coords, gun}) => {
            this.field.hitCell(coords, gun);
        });
    }

    join(uid) {
        const team = resolveTeam.call(this);
    }

    start() {
        console.log('Battle has begun!');
        console.log('\n');
        console.log('Show field: ');
        this.field.display();

        console.log('attack: ');
        this.attack([
            {coords: 'A:2', weapon: 'Machine Gun'},
            {coords: 'B:6', weapon: 'Rocket'}
        ]);

        console.log('\n');
        console.log('Show field: ');
        this.field.display();
    }
}

function resolveTeam() {
    return this.teamA || this.teamB;
}