<template>
    <div id="cell-container" v-bind:style="{ gridTemplateRows: gridRowStyle, gridTemplateColumns: gridColumnStyle }">
        <cell v-for="(cell, index) in getCells()" v-bind:alive="cell.alive" v-bind:index="index" :key="index" />
    </div>
</template>

<script>
    import Cell from "./Cell.vue";

    export default {
        components: {
            "cell": Cell
        },

        computed: {
            // Returns the style for the gridTemplateRows property
            gridRowStyle() {
                return `repeat(${this.getNumRows()}, ${this.getCellSize()}px)`;
            },

            // Returns the style for the gridTemplateColumns property
            gridColumnStyle() {
                return `repeat(${this.getNumColumns()}, ${this.getCellSize()}px)`;
            }
        }
    };
</script>

<style scoped>
    #cell-container {
        display: grid;

        cursor: none;
    }
</style scoped>