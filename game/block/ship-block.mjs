'use strict';

import Perk from "../perk/perk.mjs";
import Block from "./block.mjs";

const health = 100;

export default class ShipBlock extends Block {

    /**
     * @param perk
     * @param onHit
     */
    constructor(perk, onHit) {
        super();

        if (!(perk instanceof Perk)) {
            throw 'Перк задан криво';
        }

        this.health = health;
        this.perk = perk;
        this.onHit = onHit;
    }

    get isDead() {
        return this.health <= 0;
    }

    hit(weapon) {
        this.health -= weapon.damage;
        if (this.onHit) this.onHit({coords: this.coords, weapon});
    }
}