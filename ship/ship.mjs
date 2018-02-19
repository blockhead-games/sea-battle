'use strict';

import {ShipBlock} from '../block'
import {Rocket} from '../perk'


export default class Ship {
    constructor(params) {

        this.name = 'Ship 4';

        this.blocks = [
            new ShipBlock({perk: new Rocket(), onHit: this.hitBlock.bind(this)}),
            new ShipBlock({perk: new Rocket(), onHit: this.hitBlock.bind(this)}),
            new ShipBlock({perk: new Rocket(), onHit: this.hitBlock.bind(this)}),
            new ShipBlock({perk: new Rocket(), onHit: this.hitBlock.bind(this)})
        ];
    }

    hitBlock(perk) {
        console.log(`${this.name} was attacked in block with perk [${perk}]`)
    }

    static get rows() {
        return 4;
    }

    static get cols() {
        return 1;
    }
}