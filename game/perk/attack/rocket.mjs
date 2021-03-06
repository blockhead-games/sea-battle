'use strict';

import Attack from './attack';

const name = 'Rocket';
const damage = 100;
const range = 3;

export default class Rocket extends Attack {
    constructor() {
        super(name, damage, range);
    }

    action() {
        return {
            '-1':
                {'-1': 0.5, '0': 1.0, '1': 0.5},
            '0':
                {'-1': 0.5, '0': 1.0, '1': 0.5},
            '1':
                {'-1': 0.5, '0': 0.5, '1': 0.5}
            // + i
        }
    }
}