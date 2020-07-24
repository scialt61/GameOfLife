<template>
    <div @mousedown="setValue()" v-bind:class="[cellClass]">
    </div>
</template>

<script>
    export default {
        props: ["alive", "index"],

        methods: {
            // Sets the value of the cell
            setValue() {
                this.setCellAt(this.row, this.column, !this.alive);
            }
        },

        computed: {
            // Returns the row the cell is in
            row() {
                return Math.floor(this.index / this.getNumColumns());
            },

            // Returns the column the cell is in
            column() {
                return this.index % this.getNumColumns();
            },

            // Returns the class the cell should use
            cellClass() {
                return this.alive ? "cell-alive" : "cell-dead";
            }
        }
    };
</script>

<style scoped>
    .cell-dead {
        border: 1px solid rgb(25, 25, 25);
    }

    .cell-dead:hover {
        background-color: rgb(45, 45, 45);
    }

    .cell-alive {
        background-color: rgb(215, 215, 215);
        border: 1px solid rgb(195, 195, 195);
    }

    .cell-alive:hover {
        background-color: rgb(235, 235, 235);
    }
</style>