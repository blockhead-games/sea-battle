'use strict';

import Attack from './attack';

const name = 'Rocket';
const damage = 10;
const range = 1;

export default class Rocket extends Attack {
    constructor() {
        super({name, damage, range});
    }
}