'use strict';

import {Player} from '../player'

const PLAYERS_LIMIT = 2;

export default class Battle {
    constructor() {
        this.players = [];
        this.isStarted = false;
    }

    join(uid) {
        if (this.players.length >= PLAYERS_LIMIT) throw  'Battle is full.';
        this.players.push(new Player(uid));
    }

    attack(playerN, attacksList) {
        if (!this.isStarted) throw 'Battle has not started yet!';

        const player = this.players[playerN];
        const field = player.field;

        attacksList.forEach(({coords, weapon}) => {
            field.hitCell(coords, weapon);
        });
    }

    start() {
        this.isStarted = true;
        console.log('Battle has begun!');
    }
}