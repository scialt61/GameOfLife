<!-- Core app component -->
<template>
    <div id="app">
        <game-container />
    </div>
</template>

<script>
    import GameContainer from "./game/GameContainer.vue";

    import mixin from "../mixin.js";

    export default {
        mixins: [mixin],

        components: {
            "game-container": GameContainer
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

        display: flex;

        justify-content: center;
        align-items: center;
    }
</style>