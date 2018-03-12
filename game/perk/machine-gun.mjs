'use strict';

import Attack from './attack';

const name = 'Machine Gun';
const damage = 10;
const range = 1;

export default class MachineGun extends Attack {
    constructor() {
        super({name, damage, range});
    }

    action() {
        return {'0': {'0': 1.0}}
    }
}