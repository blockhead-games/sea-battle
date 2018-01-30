'use strict';

const health = 100;

export default class Block {

    /**
     * @param {Perk} perk
     */
    constructor(perk) {
        this.health = health;
        this.perk = perk;
    }

    set health(val) {

    }
}