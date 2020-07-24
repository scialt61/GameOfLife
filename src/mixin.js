import Cell from "./classes/Cell.js";

// Main mixin used for the game
export default {
    methods: {
        /* Getters and Setters */
        // Returns the number of rows
        getNumRows() {
            return this.$store.state.rows;
        },

        // Returns the number of columns
        getNumColumns() {
            return this.$store.state.columns;
        },

        // Returns the array of cells
        getCells() {
            return this.$store.state.cells;
        },
        
        // Gets the row used by an index
        getRow(index) {
            return Math.floor(index / this.getNumColumns());
        },

        // Gets the column used by an index
        getColumn(index) {
            return index % this.getNumColumns();
        },

        // Returns the row at the given index
        getRowAt(index) {
            return this.getCells().slice(this.getNumColumns() * index, this.getNumColumns() * (index + 1));
        },

        // Returns the cell at the given index
        getCellAt(row, column) {
            return this.getRowAt(row)[column];
        },

        // Sets the value at a given cell
        setCellAt(row, column, value) {
            this.$store.commit("setCell", {
                row,
                column,
                value
            });
        },

        // Sets the value of all cells
        setCells(cells) {
            this.$store.commit("setCells", cells);
        },

        // Returns if the game is active
        isActive() {
            return this.$store.state.active;
        },

        // Toggles if the game is active
        toggleActive() {
            this.$store.commit("setActive", !this.isActive());
        },

        /* Helper functions */
        // Checks if an index (row, column) is valid
        isIndexValid(row, column) {
            return row >= 0 && column >= 0 && row < this.getNumRows() && column < this.getNumColumns();
        },
        
        // Returns the neighbors of a cell
        getNeighborCells(row, column) {
            // Filters and maps over a list of potential neighbors
            return [
                [row - 1, column - 1],
                [row - 1, column],
                [row - 1, column + 1],
                [row, column - 1],
                [row, column + 1],
                [row + 1, column - 1],
                [row + 1, column],
                [row + 1, column + 1]
            ].filter(index => this.isIndexValid(index[0], index[1]))
            .map(index => this.getCellAt(index[0], index[1]));
        },

        // Returns if a cell at an index survives
        shouldCellSurvive(index) {
            let row = this.getRow(index);
            let column = this.getColumn(index);

            let cell = this.getCellAt(row, column);

            let neighbors = this.getNeighborCells(row, column);

            let countAliveNeighbors = neighbors.filter(cell => cell.alive).length;

            // Rules of game of life
            return countAliveNeighbors === 3 || (cell.alive && countAliveNeighbors === 2);
        },

        // Returns what the array of cells should look like after a tick
        getResultOfTick() {
            return this.getCells()
                .map((_, index) => Cell(this.shouldCellSurvive(index)));
        },

        // Updates the cells
        updateCells() {
            this.setCells(this.getResultOfTick());
        }
    }
};