<template>
    <div id="clear-button" class="control-button" @click="clear">Clear</div>
</template>

<script>
    export default {
        methods: {
            // Clears the grid and pauses the game
            clear() {
                this.clearCells();

                // Resets the game
                this.setActive(false);
                this.setTimesPaused(0);
            }
        }
    };
</script>