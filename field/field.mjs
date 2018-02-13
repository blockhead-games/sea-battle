'use strict';

const DEFAULT_WIDTH = 10;
const DEFAULT_HEIGHT = 10;
const COORDS_DELIMITER = '-';

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

    /**
     * @param ship
     * @param coordsCollection
     */
    placeShip(ship, coordsCollection) {
        // getCellsSequence

        // const parseCoords = (coords) => coords.map((val) => val.split(COORDS_DELIMITER));

        // coordsCollection.map((coords) => parseCoords(coords));

        const cells = getCellsSequence.apply(this, coordsCollection.map((coords) => parseCoords(coords)));

        cells.forEach((cell, i) => {
            cell.block = ship.blocks[i];
        });
    }

    attack(coordsCollection, gun) {

        coordsCollection.forEach((coords) => {
            let cell = this.getCell(coords);
            console.log(cell);
        });

        // cells.forEach((cell, i) => {
        //     cell.block = ship.blocks[i];
        // });

        // console.log(this.grid.A[1]);

        /*if (this.hasShip(coords)) {
            // hit!
        } else {
            // miss.
        }*/
    }

    /**
     *
     * @param {string} coords
     * @return {object} - Cell
     */
    getCell(coords) {
        const [letter, number] = parseCoords(coords);
        return this.grid[letter][number];
    }

    hasShip(coords) {
    }

    reset() {
    }
}

const parseCoords = (coords) => coords.split(COORDS_DELIMITER);

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

function getRow(letter, number1, number2) {
    let row = [];

    for (let i = number1; i <= number2; i++) {
        row.push(this.grid[letter][i]);
    }

    return row;
}

// A1-A4
// A1-B1
function getCellsSequence(coord1, coord2) {
    //@todo check if (Letter, Number) go in row

    const letters = Object.keys(this.grid);
    const [letter1, number1] = coord1;
    const [letter2, number2] = coord2;

    // console.log(coord1);
    // console.log(coord2);

    if (letter1 === letter2) {
        return getRow.apply(this, [letter1, number1, number2]);
    } else {
        // getColumn();
    }

    // console.log(grid[letter1][number1]);
    // console.log(grid[letter2][number2]);
}