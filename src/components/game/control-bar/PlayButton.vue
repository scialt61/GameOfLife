<template>
    <div id="play-button" @click="onClick">
        {{ buttonText }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // How many times the game has been paused
                timesPaused: 0
            };
        },

        methods: {
            // Runs when the button is clicked
            onClick() {
                // The game will be paused, so timePaused is incremented
                if (this.isActive()) {
                    this.timesPaused++;
                }

                this.toggleActive();
            }
        },

        computed: {
            // Returns the string used for the button text
            buttonText() {
                return this.isActive() ? "Pause" : this.timesPaused === 0 ? "Start" : "Resume";
            }
        }
    };
</script>

<style scoped>
    #play-button {
        display: flex;

        justify-content: center;
        align-items: center;

        color: rgb(255, 255, 255);

        font-size: 200%;

        font-family: "Helvetica";

        user-select: none;
    }

    #play-button:hover {
        background-color: rgb(45, 45, 45);
    }
</style>