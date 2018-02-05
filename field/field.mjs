'use strict';

const DEFAULT_WIDTH = 10;
const DEFAULT_HEIGHT = 10;

const generateAlphabet = (size = 26, firstChar = 65) => Array.from({
    length: size
}, (_, i) => String.fromCharCode(firstChar + i));

const makeColumns = (number) => Object.assign({}, ...Array.from({
    length: number
}).map((_, i) => {
    const index = i + 1;
    return {[index]: {id: index}};
}));

const makeGrid = (width, height) => {
    const alphabet = generateAlphabet(height);

    return Object.assign({}, ...alphabet.map(char => ({
        [char]: makeColumns(width)
    })));
};

export default class Field {
    constructor() {
        let grid = makeGrid(DEFAULT_WIDTH, DEFAULT_HEIGHT);

        // tests
        console.log('Grid: ');
        console.log(grid);

        console.log('Strike A-1: ');
        console.log(grid.A[1]);
    }

    hasShip(coord) {
    }
}