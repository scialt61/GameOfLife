<template>
    <div id="cell-container" v-bind:style="{ gridTemplateRows: gridStyle }">
        <cell-row v-for="row in cells" v-bind:cells="row" />
    </div>
</template>

<script>
    import { mapState } from "vuex";

    import CellRow from "./CellRow.vue";

    export default {
        components: {
            "cell-row": CellRow
        },

        computed: {
            ...mapState(["cells", "rows"]),

            // Returns the style for the gridTemplateRows property
            gridStyle: function () {
                return `repeat(${this.rows}, 40px)`;
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