<template>
    <div id="cell-container" v-bind:style="{ gridTemplateRows: gridStyle() }">
        <cell-row v-for="(row, index) in cells()" :key="index" v-bind:cells="row" v-bind:row="index" />
    </div>
</template>

<script>
    import { mapState } from "vuex";

    import CellRow from "./CellRow.vue";

    export default {
        components: {
            "cell-row": CellRow
        },

        methods: {
            cells() {
                return this.$store.state.cells;
            },

            rows() {
                return this.$store.state.rows;
            },

            // Returns the style for the gridTemplateRows property
            gridStyle() {
                return `repeat(${this.$store.state.rows}, 40px)`;
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