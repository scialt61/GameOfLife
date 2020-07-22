<template>
    <div id="cell-row" v-bind:style="{ gridTemplateColumns: gridStyle }">
        <cell v-for="(cell, index) in cells" v-bind:data="cell" v-bind:row="row" />
    </div>
</template>

<script>
    import { mapState } from "vuex";

    import Cell from "./Cell.vue";

    export default {
        props: ["cells", "row"],

        components: {
            cell: Cell
        },

        computed: {
            ...mapState(["columns"]),

            // Returns the style for the gridTemplateColumns property
            gridStyle: function () {
                return `repeat(${this.columns}, 40px)`;
            }
        }
    };
</script>

<style scoped>
    #cell-row {
        display: grid;
    }
</style>