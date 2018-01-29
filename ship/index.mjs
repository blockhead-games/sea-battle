'use strict';

import Block from '../block/block'
import Ship from './ship'

export default class ShipController {
    constructor() {
        this.ship = new Ship();
    }
}