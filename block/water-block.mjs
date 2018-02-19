'use strict';

import Block from "./block.mjs";

const type = 'WATER_BLOCK';

export default class WaterBlock extends Block {

    /**
     * @param {Object} params
     */
    constructor(params) {
        super(params);

        const {onHit} = params || {};

        this.onHit = onHit;
        this.type = type
    }

    hit() {
        this.onHit(this.perk.name);
    }

    // set health(val) {
    //
    // }
}