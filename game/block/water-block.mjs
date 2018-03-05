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
        this.isOpen = true;
        if (this.onHit) this.onHit();
    }

    // set health(val) {
    //
    // }
}