'use strict';

import {ShipBlock} from '../block'
import {Attack} from '../perk'

export default class Ship {

    constructor(name, blocks, onDestroy) {

        this.name = name;

        this.blocks = build.call(this, blocks);

        this.onDestory = onDestroy;
    }

    get weapons() {
        return this.blocks.map(block => block.perk);
    }

    get isDead() {
        return this.blocks.every(block => block.isDead);
    }

    get coordsCollection() {
        return this.blocks.map(block => block.coords);
    }
}

/**
 * @param {array} blocks
 */
function build(blocks) {
    return blocks.map(block => {
        const PerkConstructor = Attack[block.perk];

        if (!PerkConstructor) throw `Constructor for perk [${block.perk}] was not found.`;

        return new ShipBlock(new PerkConstructor(), blockHit.bind(this))
    });
}

/**
 * Callback
 * @param {object} - Summary
 */
function blockHit({coords, weapon}) {
    console.log(`[${this.name}] was attacked in block on [${coords}] with weapon [${weapon.name}]`);

    if (this.isDead) {
        console.log(`[${this.name}] is dead.`);
        if (this.onDestory) this.onDestory(this.coordsCollection);
    }
}