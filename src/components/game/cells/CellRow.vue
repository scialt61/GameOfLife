<template>
    <div id="cell-row" v-bind:style="{ gridTemplateColumns: gridStyle }">
        <cell v-for="cell in cells" v-bind:data="cell" />
    </div>
</template>

<script>
    import { mapState } from "vuex";

    import Cell from "./Cell.vue";

    export default {
        props: ["cells"],

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