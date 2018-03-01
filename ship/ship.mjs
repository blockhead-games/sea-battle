'use strict';

import {ShipBlock} from '../block'
import * as Perk from '../perk'


export default class Ship {
    constructor(params) {

        const {name, blocks} = params;

        this.name = name;

        this.blocks = build.call(this, blocks);
    }

    hitBlock(perk) {
        console.log(`[${this.name}] was attacked in block with perk [${perk}]`)
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