'use strict';

import {ShipBlock} from '../block'
import * as Perk from '../perk'


export default class Ship {
    constructor(params) {

        const {name, blocks} = params;

        this.name = name;

        this.blocks = build.call(this, blocks);
    }

    hitBlock({coords, weapon}) {
        console.log(`[${this.name}] was attacked in block on [${coords}] with weapon [${weapon}]`)
    }
}

/**
 * @param {array} blocks
 */
function build(blocks) {
    return blocks.map(block => {
        const PerkConstructor = Perk[block.perk];

        if (!PerkConstructor) throw `Constructor for perk [${block.perk}] was not found.`;

        return new ShipBlock({perk: new PerkConstructor(), onHit: this.hitBlock.bind(this)})
    });
}