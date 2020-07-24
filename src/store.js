import Vue from "vue";
import Vuex from "vuex";

import config from "./config.js";
import Cell from "./classes/Cell.js";

// Creates an array filled with cells
const filledArray = (length, cell) => {
    let array = [];

    for (let i = 0; i < length; i++) {
        array.push({...cell});
    }

    return array;
}

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // Represents the dimensions of the board
        rows: config.rows,
        columns: config.columns,

        // Represents the cells used in the game (uses 1D array with getter functions)
        cells: filledArray(config.rows * config.columns, Cell(false)),

        // Represents if the game is active
        active: false
    },

    mutations: {
        // Sets the value of a cell
        setCell(state, { row, column, value }) {
            state.cells[row * state.columns + column].alive = value;
        },

        // Sets if the game is active
        setActive(state, active) {
            state.active = active;
        }
    }
});