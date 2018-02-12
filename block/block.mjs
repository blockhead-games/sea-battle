'use strict';

import {Ship} from "../ship/index.mjs";
import Perk from "../perk/perk.mjs";

const health = 100;

export default class Block {

    /**
     * @param {Object} params
     */
    constructor(params) {
        this.isOpen = false;
    }

    set isOpen(val) {
        this._isOpen = !!val;
    }
}