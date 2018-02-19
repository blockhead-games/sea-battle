'use strict';

export default class Block {
    /**
     * @param {Object} params
     */
    constructor(params) {
        this.isOpen = false;
    }

    set isOpen(val) {
        this._isOpen = !!val;
    }
}