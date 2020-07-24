import Vue from "vue";
import Vuex from "vuex";

import mixin from "./mixin.js";

Vue.use(Vuex);

// Loads data from mixin
const configs = mixin.data().configs;

export default new Vuex.Store({
    state: {
        // Represents the dimensions of the board
        rows: configs.rows,
        columns: configs.columns,

        // Represents the size of a cell in pixels
        cellSize: configs.cellSize,

        // Represents the cells used in the game (uses 1D array with getter functions)
        // Starts off empty, is filled with cells on app creation
        cells: [],

        // Represents if the game is active
        active: false,

        // Represents the number of times the game has been paused in a single simulation
        timesPaused: 0
    },

    mutations: {
        // Sets the value of a cell
        setCell(state, { row, column, value }) {
            state.cells[row * state.columns + column].alive = value;
        },

        // Sets the values of all cells
        setCells(state, cells) {
            state.cells = cells;
        },

        // Sets if the game is active
        setActive(state, active) {
            state.active = active;
        },

        // Sets the times paused
        setTimesPaused(state, value) {
            state.timesPaused = value;
        }
    }
});