'use strict';

export default class Battles {
    constructor() {
        this.battles = {};
    }

    addPlayer(uid) {
    }

    getCommand(action, params) {

    }

    getBattleByUser(uid) {
        // this.battles .each .....
        // battlesIndex[uid]
    }

    create(id) {
        this.battles[id] = new Battle();
    }

    delete(id) {
        delete this.battles[id];
    }
}