'use strict';

import Perk from './perk.mjs';

export default class Attack extends Perk {

    constructor(obj) {
        super(obj);

        let {damage, range} = obj;

        this.damage = damage;
        this.range = range;
    }

    get damage() {
        return this._damage;
    }

    set damage(val) {
        this._damage = val;
    }

    get range() {
        return this._damage;
    }

    set range(val) {
        this._range = val;
    }
}