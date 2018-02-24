'use strict';

import Cell from './cell'

const DEFAULT_WIDTH = 10;
const DEFAULT_HEIGHT = 10;
const COORDS_DELIMITER = ':';

export default class Field {
    constructor() {
        this.grid = makeGrid(DEFAULT_WIDTH, DEFAULT_HEIGHT);

        // tests
        // console.log('Grid: ');
        // console.log(this.grid);
        //
        // console.log('Strike A-1: ');
        // console.log(this.grid.A[1]);
    }

    // A1-A4
    // A1-B1
    getCellsSequence([coord1, coord2]) {
        //@todo check if (Letter, Number) go in row

        const letters = Object.keys(this.grid);
        const [letter1, number1] = coord1;
        const [letter2, number2] = coord2;

        if (letter1 === letter2) {
            return getRow.apply(this, [letter1, number1, number2]);
        } else if (number1 === number2) {
            return getColumn.apply(this, [letter1, letter2, number1]);
        } else {
            throw 'Incorrect coords.';
        }
    }

    /**
     * @param ship
     * @param coordsCollection
     */
    placeShip(ship, coordsCollection) {
        const cells = this.getCellsSequence(coordsCollection.map((coords) => parseCoords(coords)));

        cells.forEach((cell, i) => {
            cell.block = ship.blocks[i];
        });
    }

    /**
     * @param {string} coords
     * @return {object} - Cell
     */
    getCell(coords) {
        const [letter, number] = parseCoords(coords);
        return this.grid[letter][number];
    }

    display() {
        Object.entries(this.grid).forEach(([k, v]) => {
            console.log(k, JSON.stringify(v));
        });
    }

    static hasShip(cell) {
        return !!cell.block;
    }

    reset() {
    }
}

const parseCoords = (coords) => coords.split(COORDS_DELIMITER);

const generateAlphabet = (size = 26, firstChar = 65) => Array.from({
    length: size
}, (_, i) => String.fromCharCode(firstChar + i));

/**
 * @todo make each cell new instance of {WaterBlock}
 * @todo rename makeCells -> makeBlocks
 * @param width
 * @param letter
 */
const makeCells = (width, letter) => Object.assign({}, ...Array.from({
    length: width
}).map((_, i) => {
    const number = i + 1;
    return {
        [number]: new Cell({id: letter + COORDS_DELIMITER + number})
    };
}));

const makeGrid = (width, height) => {
    const alphabet = generateAlphabet(height);

    return Object.assign({}, ...alphabet.map(letter => ({
        [letter]: makeCells(width, letter)
    })));
};

function getRow(letter, number1, number2) {
    let row = [];

    for (let i = number1; i <= number2; i++) {
        row.push(this.grid[letter][i]);
    }

    return row;
}

function getColumn(letter1, letter2, number) {
    const letters = Object.keys(this.grid);
    const start = letters.indexOf(letter1);
    const end = letters.indexOf(letter2) + 1;

    return letters.slice(start, end).map((letter) => this.grid[letter][number]);
}