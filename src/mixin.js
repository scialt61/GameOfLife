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

        // Returns the row at the given index
        getRowAt(index) {
            return this.getCells().slice(this.getNumColumns() * index, this.getNumRows() * (index + 1));
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
            return row > -1 && column > -1 && row < this.getNumRows() && column < this.getNumColumns();
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
        }
    }
};