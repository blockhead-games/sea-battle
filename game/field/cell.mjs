'use strict';

export default class Cell {
    constructor(params) {
        const {
            id,
            isOpen = false,
            block = null
        } = params;

        this.id = id;
        this.isOpen = isOpen;
        this.block = block;
    }
}