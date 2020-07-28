<template>
    <div id="play-button" class="control-button text-component" @click="onClick">
        {{ buttonText }}
    </div>
</template>

<script>
    export default {
        methods: {
            // Runs when the button is clicked
            onClick() {
                // Increments times paused if needed
                if (this.isActive())
                    this.incrementTimesPaused();

                this.toggleActive();
                
                // Updates wasActive as well
                this.setWasActive(this.isActive());
            }
        },

        computed: {
            // Returns the string used for the button text
            buttonText() {
                return this.isActive() || this.wasActive() ? "Pause" : this.getTimesPaused() === 0 ? "Start" : "Resume";
            }
        }
    };
</script>