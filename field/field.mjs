'use strict';

const defaultWidth = 10;
const defaultHeight = 10;

export default class Field {
    static get DIRECTION_RIGHT() {
        return 0;
    }

    static get DIRECTION_BOTTOM() {
        return 1;
    }

    static get DIRECTION_LEFT() {
        return 2;
    }

    static get DIRECTION_TOP() {
        return 3;
    }

    constructor(params) {
        const {width, height} = params || {};

        this._width = width || defaultWidth;
        this._height = height || defaultHeight;
        this._cells = [];
        this._build();
    }

    _build() {
        if (!this._built) {
            for (let h = 0; h < this._height; h++) {
                this._cells.push([]);

                for (let w = 0; w < this._width; w++) {
                    this._cells[h].push(false);
                }
            }

            console.log(this._cells);

            this._built = true;
        }
    }

    addBlock(coords, block) {

    }

    /**
     *
     * @param {string} point
     * @param {number} direction
     * @param {Ship} ship
     * @throws {Error}
     * @returns {boolean}
     */
    addShip(point, direction, ship) {
        const coords = this.constructor.getCoordsByPoint(point);

        switch (direction) {
            case this.constructor.DIRECTION_BOTTOM:
                for (let h = 0; h < ship.constructor.rows; h++) {
                    for (let w = 0; w < ship.constructor.cols; w++) {
                        let block = ship.blocks[h][w];
                        //this.addBlock([coords[0] + ]);
                    }
                }
                break;
            default:
                throw 'Направление задано криво';
        }

        return true;
    }

    /**
     * @param {string} val
     * @throws {Error}
     * @returns {[]}
     */
    static getCoordsByPoint(val) {
        const arr = [];
        for (let i = 0; i < 26; i++) {
            arr.push(String.fromCharCode(i + 65));
        }

        const split = val.split('');
        const row = arr.indexOf(split[0]);
        const col = (+split[1] || 0) - 1;

        if (row < 0 || col < 0) {
            throw 'Криво задана точка';
        }

        return [row, col];
    }
}