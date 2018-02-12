'use strict';

const DEFAULT_WIDTH = 10;
const DEFAULT_HEIGHT = 10;

const generateAlphabet = (size = 26, firstChar = 65) => Array.from({
    length: size
}, (_, i) => String.fromCharCode(firstChar + i));

const makeCells = (number) => Object.assign({}, ...Array.from({
    length: number
}).map((_, i) => {
    const index = i + 1;
    return {[index]: {id: index}}; // new Cell
}));

const makeGrid = (width, height) => {
    const alphabet = generateAlphabet(height);

    return Object.assign({}, ...alphabet.map(char => ({
        [char]: makeCells(width)
    })));
};

const getRow = function (letter, number1, number2) {
    let row = [];

    console.log(this);

    for (let i = number1; i <= number2; i++) {
        row.push(this.grid[letter][i]);
    }

    return row;
};

// A1-A4
// A1-B1
const getCellsSequence = function (coord1, coord2) {
    // check if (Letter, Number) go in row
    const letters = Object.keys(this.grid);
    const [letter1, number1] = coord1;
    const [letter2, number2] = coord2;

    console.log(coord1);
    console.log(coord2);

    if (letter1 === letter2) {
        return getRow.apply(this, [letter1, number1, number2]);
    } else {
        // getColumn();
    }

    // console.log(grid[letter1][number1]);
    // console.log(grid[letter2][number2]);
};

// getCellsSequence(['A', 1], ['A', 4]);

export default class Field {
    constructor() {
        this.grid = makeGrid(DEFAULT_WIDTH, DEFAULT_HEIGHT);

        // tests
        console.log('Grid: ');
        console.log(this.grid);

        console.log('Strike A-1: ');
        console.log(this.grid.A[1]);
    }

    /**
     * @param ship
     * @param {function} factory - return coords
     */
    placeShip(ship, factory) {
        // getCells
        const seq = getCellsSequence.apply(this, [['A', 1], ['A', 4]]);
    }

    hasShip(coord) {
    }

    reset() {
    }
}