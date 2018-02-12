'use strict';

import {Ship} from "../ship/index.mjs";
import Perk from "../perk/perk.mjs";
import Block from "./block.mjs";

const health = 100;

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
        this.perk = perk;
        this.onHit = onHit;
    }

    hit() {
        this.onHit(this.perk.name);
    }

    // set health(val) {
    //
    // }
}