<template>
    <div id="game-container">
        <cell-container></cell-container>
    </div>
</template>

<script>
    import CellContainer from "./cells/CellContainer.vue";

    export default {
        components: {
            "cell-container": CellContainer
        }
    };
</script>

<style scoped>
    #game-container {
        width: 100%;
        height: 100%;

        display: grid;

        grid-template-rows: 90% auto;
    }
</style>