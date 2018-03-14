'use strict';

import {Player} from '../player'

const PLAYERS_LIMIT = 2;

export default class Battle {
    constructor() {
        this.players = {};
        this.isStarted = false;
    }

    get playersCount() {
        return Object.keys(this.players).length;
    }

    join(uid) {
        if (this.playersCount >= PLAYERS_LIMIT) throw  'Battle is full.';
        if (this.players[uid]) throw  `Player ${uid} already has joined.`;

        this.players[uid] = new Player(uid);
    }

    attack(uid, attacksList) {
        if (!this.isStarted) throw 'Battle has not started yet!';

        const player = this.players[uid];
        const field = player.field;

        attacksList.forEach(({coords, weapon}) => {
            field.hitCell(coords, weapon);
        });
    }

    start() {
        if (this.playersCount < PLAYERS_LIMIT) throw `Can't start now. At least ${PLAYERS_LIMIT} players are needed.`;
        this.isStarted = true;
        console.log('Battle has begun!');
    }
}