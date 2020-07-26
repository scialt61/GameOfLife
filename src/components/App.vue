<!-- Core app component -->
<template>
    <div id="app">
        <game-container />
        <selector-container v-if="getSelector() === enums.selectors.tickrate" />
    </div>
</template>

<script>
    import GameContainer from "./game/GameContainer.vue";
    import SelectorContainer from "./selectors/SelectorContainer.vue";

    import mixin from "../mixin.js";

    export default {
        mixins: [mixin],

        components: {
            "game-container": GameContainer,
            "selector-container": SelectorContainer
        },

        methods: {
            // Runs every tick
            tick() {
                if (this.isActive())
                    this.updateCells();

                setTimeout(this.tick, this.getTickrate());
            }
        },

        created() {
            // Initializes cell array
            this.clearCells();

            this.tick();
        }
    };
</script>

<style scoped>
    #app {
        position: absolute;

        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background-color: rgb(35, 35, 35);

        display: grid;

        grid-template-rows: auto;
        grid-template-columns: auto;
    }
</style>