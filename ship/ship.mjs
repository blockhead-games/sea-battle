'use strict';

import {Block} from '../block'
import {Rocket} from '../perk'


export default class Ship {
    constructor(params) {
        this.blocks = [];
        this.blocks.push([]);
        
        for (let i = 0; i < 4; i++) {
            var data = {ship: this, perk: new Rocket()};
            this.blocks.push(new Block(data));
        }
    }

    static get rows() {
        return 4;
    }

    static get cols() {
        return 1;
    }
}