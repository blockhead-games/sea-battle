'use strict';

import Perk from "../perk/perk.mjs";
import Block from "./block.mjs";

const health = 100;
const type = 'SHIP_BLOCK';

export default class ShipBlock extends Block {

    /**
     * @param {Object} params
     */
    constructor(params) {
        super(params);

        const {perk, onHit} = params || {};

        if (!(perk instanceof Perk)) {
            throw 'Перк задан криво';
        }

        this.health = health;
        this.type = type;
        this.perk = perk;
        this.onHit = onHit;
    }

    hit(summary) {
        if (this.onHit) this.onHit(summary);
    }

    // set health(val) {
    //
    // }
}