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
        }
    }
};