'use strict';

import Perk from '../perk'

export default class Attack extends Perk {

    constructor(name, damage, range) {
        super(name);

        this.damage = damage;
        this.range = range;
    }
}