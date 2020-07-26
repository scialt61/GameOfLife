<template>
    <div id="game-container">
        <cell-container />
        <control-bar />
    </div>
</template>

<script>
    import CellContainer from "./cells/CellContainer.vue";
    import ControlBar from "./control-bar/ControlBar.vue";

    export default {
        components: {
            "cell-container": CellContainer,
            "control-bar": ControlBar
        }
    };
</script>

<style scoped>
    #game-container {
        grid-row: 1;
        grid-column: 1;

        display: grid;

        grid-template-rows: 90% auto;
    }
</style>