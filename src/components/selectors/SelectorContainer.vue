<template>
    <div id="selector-container">
        <tickrate-selector v-if="getSelector() === enums.selectors.tickrate" />
    </div>
</template>

<script>
    import TickrateSelector from "./tickrate-selector/TickrateSelector.vue";

    export default {
        components: {
            "tickrate-selector": TickrateSelector
        }
    };
</script>

<style scoped>
    #selector-container {
        grid-row: 1;
        grid-column: 1;

        display: grid;

        grid-template-rows: auto;
        grid-template-columns: auto;
    }
</style>