<template>
    <div @click="setValue()" v-bind:class="[cell.alive ? aliveClass : deadClass]">
    </div>
</template>

<script>
    export default {
        props: ["index"],

        data() {
            return {
                aliveClass: "cell-alive",
                deadClass: "cell-dead"
            };
        },

        methods: {
            // Sets the value of the cell
            setValue() {
                this.setCellAt(this.row, this.column, true);
            }
        },

        computed: {
            // Returns the row the cell is in
            row() {
                return Math.floor(this.index / this.getNumColumns());
            },

            // Returns the column the cell is in
            column() {
                return this.index % this.getNumRows();
            },

            // Returns the value of the given cell
            cell() {
                return this.getCellAt(this.row, this.column);
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