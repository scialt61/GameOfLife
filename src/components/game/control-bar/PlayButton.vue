<template>
    <div class="control-button" @click="onClick">
        {{ buttonText }}
    </div>
</template>

<script>
    export default {
        methods: {
            // Runs when the button is clicked
            onClick() {
                // The game will be paused, so timePaused is incremented
                if (this.isActive()) {
                    this.incrementTimesPaused();
                }

                this.toggleActive();
            }
        },

        computed: {
            // Returns the string used for the button text
            buttonText() {
                return this.isActive() ? "Pause" : this.getTimesPaused() === 0 ? "Start" : "Resume";
            }
        }
    };
</script>