import Cell from "./classes/Cell.js";

// Main mixin used for the game
export default {
    data() {
        // Config values
        const configs = {
            // Dimensions of the grid
            rows: 43,
            columns: 96,

            // Size of a cell in pixels
            cellSize: 20,

            // Tickrate in ms
            tickrate: 200
        };

        // Default values
        const defaultValues = {
            // Default value of a cell
            cellValue: Cell(false)
        };

        return {
            configs,
            defaultValues
        };
    },
    
    methods: {
        /* Misc. utility functions */
        // Creates an array filled with cells
        filledArray: (length, cell) => {
            let array = [];
        
            for (let i = 0; i < length; i++) {
                array.push({...cell});
            }
        
            return array;
        },

        /* Getters and Setters */
        // Returns the number of rows
        getNumRows() {
            return this.$store.state.rows;
        },

        // Returns the number of columns
        getNumColumns() {
            return this.$store.state.columns;
        },

        // Returns the cell size
        getCellSize() {
            return this.$store.state.cellSize;
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

        // Sets if the game is active
        setActive(active) {
            this.$store.commit("setActive", active);
        },

        // Toggles if the game is active
        toggleActive() {
            this.setActive(!this.isActive());
        },

        // Updates the cells
        updateCells() {
            this.setCells(this.getResultOfTick());
        },

        // Clears the array of cells
        clearCells() {
            this.setCells(this.filledArray(this.getNumRows() * this.getNumColumns(), this.defaultValues.cellValue));
        },

        // Returns the number of times paused
        getTimesPaused() {
            return this.$store.state.timesPaused;
        },

        // Sets the number of times paused
        setTimesPaused(value) {
            this.$store.commit("setTimesPaused", value);
        },

        // Increments the number of times paused
        incrementTimesPaused() {
            this.setTimesPaused(this.getTimesPaused() + 1);
        },

        // Returns the tickrate
        getTickrate() {
            return this.$store.state.tickrate;
        },

        // Sets the tickrate
        setTickrate(value) {
            this.$store.commit("setTickrate", value);
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

        // Counts the number of living neighbor cells
        countAliveNeighborCells(row, column) {
            return this.getNeighborCells(row, column).filter(cell => cell.alive).length;
        },

        // Returns if a cell at an index survives
        shouldCellSurvive(index) {
            let row = this.getRow(index);
            let column = this.getColumn(index);

            let cell = this.getCellAt(row, column);

            let aliveNeighborsCount = this.countAliveNeighborCells(row, column);

            // Rules of game of life
            return aliveNeighborsCount === 3 || (cell.alive && aliveNeighborsCount === 2);
        },

        // Returns if a cell is alive or has living neighbors
        shouldCellUpdate(cell, index) {
            return cell.alive || this.countAliveNeighborCells(this.getRow(index), this.getColumn(index)) > 0;
        },

        // Returns what the array of cells should look like after a tick
        getResultOfTick() {
            return this.getCells()
                .map((cell, index) => 
                    this.shouldCellUpdate(cell, index) ? Cell(this.shouldCellSurvive(index)) : cell
                );
        }
    }
};