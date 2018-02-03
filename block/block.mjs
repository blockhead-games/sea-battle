'use strict';

import {Ship} from "../ship/index.mjs";
import Perk from "../perk/perk.mjs";

const health = 100;

export default class Block {

    /**
     * @param {Object} params
     */
    constructor(params) {
        const {ship, perk} = params || {};

        if (!(ship instanceof Ship)) {
            throw 'Корабль задан криво';
        }

        if (!(perk instanceof Perk)) {
            throw 'Перк задан криво';
        }

        this.health = health;
        this.perk = perk;
        this.ship = ship;
    }

    set health(val) {

    }
}