'use strict';

import CliTable from 'cli-table2'
import colors from 'colors/safe'

import Cell from './cell'
import {Ship} from '../ship';

const DEFAULT_WIDTH = 10;
const DEFAULT_HEIGHT = 10;
const COORDS_DELIMITER = ':';

export default class Field {
    constructor() {
        this.grid = makeGrid(DEFAULT_WIDTH, DEFAULT_HEIGHT);
        this.ships = [];
    }

    // A1-A4
    // A1-B1
    getCellsSequence([from, to]) {
        //@todo check if (Letter, Number) go in row
        // const letters = Object.keys(this.grid);

        const [fromLetter, fromNumber] = from;
        const [toLetter, toNumber] = to;

        if (fromLetter === toLetter) {
            return getRow.apply(this, [fromLetter, fromNumber, toNumber]);
        } else if (fromNumber === toNumber) {
            return getColumn.apply(this, [fromLetter, toLetter, fromNumber]);
        } else {
            throw 'Incorrect coords.';
        }
    }

    /**
     * @param shipData
     * @param coordsRange
     */
    placeShip({name, blocks}, coordsRange) {
        const ship = new Ship(name, blocks, shipDestroyed.bind(this));
        const cells = this.getCellsSequence(coordsRange.map((coords) => parseCoords(coords)));

        ship.blocks.forEach((block, i) => {
            block.coords = cells[i].id;
        });

        this.ships.push(ship);

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

    display(showShips = false) {
        const SHIP = colors.magenta('s');
        const DEAD = colors.red('x');
        const OPEN = colors.green('o');
        const CLOSE = colors.cyan('c');

        const letters = Object.keys(this.grid);
        const numbers = Object.keys(this.grid[letters[0]]);

        const table = new CliTable({head: ['', ...numbers]});
        const data = Object.entries(this.grid).map(([letter, cells]) => ({
            [letter]: Object.entries(cells).map(([number, cell]) => {

                const block = this.getBlockOn(cell.id);

                return (block) ?
                    (block.isDead) ? DEAD
                        : (showShips) ? SHIP : CLOSE
                    : (cell.isOpen) ? OPEN : CLOSE
            })
        }));

        table.push(...data);

        console.log(table.toString());
    }

    /**
     * @param coords
     * @return {Block|undefined}
     */
    getBlockOn(coords) {
        let block = undefined;

        this.ships.find(ship =>
            block = ship.blocks.find(block => block.coords === coords)
        );

        return block;
    }

    hitCell(coords, weapon) {
        const block = this.getBlockOn(coords);

        if (block) {
            console.log(`${block.coords} - hit!`);
            block.hit(weapon);
        } else {
            console.log(`${coords} - miss.`);
        }
    }
}

const parseCoords = (coords) => coords.split(COORDS_DELIMITER);

const generateAlphabet = (size = 26, firstChar = 65) => Array.from({
    length: size
}, (_, i) => String.fromCharCode(firstChar + i));

/**
 * @param width
 * @param letter
 */
const makeCells = (width, letter) => Object.assign({}, ...Array.from({
    length: width
}).map((_, i) => {
    const number = i + 1;
    return {
        [number]: new Cell(letter + COORDS_DELIMITER + number)
    };
}));

const makeGrid = (width, height) => {
    const alphabet = generateAlphabet(height);

    return Object.assign({}, ...alphabet.map(letter => ({
        [letter]: makeCells(width, letter)
    })));
};

function getSequence(array, startValue, endValue) {
    const startIndex = array.indexOf(startValue);
    const endIndex = array.indexOf(endValue) + 1;

    return array.slice(startIndex, endIndex);
}

function getRow(letter, number1, number2) {
    return getSequence(Object.keys(this.grid[letter]), number1, number2)
        .map((number) => this.grid[letter][number]);
}

function getColumn(letter1, letter2, number) {
    return getSequence(Object.keys(this.grid), letter1, letter2)
        .map((letter) => this.grid[letter][number]);
}

function iterateRange(range, cb) {
    for (let i = -range; i <= range; i++) {
        cb(i);
    }
}

function shipDestroyed(coordsCollection) {
    coordsCollection.forEach(coords => {
        const area = getAreaAround.call(this, coords);
        area.forEach(cell => cell.isOpen = true);
    });
}

// A1  A2  A3
// B1 [B2] B3
// C1  C2  C3
function getAreaAround(coords, range = 1) {

    const [letter, number] = parseCoords(coords);

    const letters = Object.keys(this.grid);

    const area = [];

    iterateRange(range, (i) => {
        const index = letters.indexOf(letter) + i;
        const curLetter = letters[index];

        if (curLetter) iterateRange(range, (i) => {
            const cell = this.grid[curLetter][Number(number) + i];
            if (cell) area.push(cell);
        });
    });

    return area;
}